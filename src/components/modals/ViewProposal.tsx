import {
  arweave,
  estimateDeadlineDate,
  getTotalVotes,
  shortTransactionId,
} from '@src/utils';
import { Avatar, List, Tag } from 'antd';
import Account, { ArAccount } from 'arweave-account';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Proposal } from 'types/dao';

import Spinner from '../loading/Spinner';
import Vote from './Vote';

function ViewProposal({
  visible,
  setVisibility,
  proposal,
}: {
  visible: boolean;
  setVisibility: (visible: boolean) => void;
  proposal?: Proposal;
}) {
  const [authorProfile, setAuthorProfile] = useState<ArAccount>();
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [votes, setVotes] = useState({ yay: 0, nay: 0 });
  const [deadlineMs, setDeadlineMs] = useState(Date.now());

  useEffect(() => {
    if (!proposal) return;
    const descriptionElement = document.getElementById('proposal-description');
    if (descriptionElement) {
      descriptionElement.innerHTML = proposal.description;
    }
    new Account().get(proposal.author).then((account: ArAccount) => {
      setAuthorProfile(account);
    });
    if (proposal) {
      setVotes(getTotalVotes(proposal.votes));
      updateDeadline(proposal);
    }
  }, [proposal]);

  function close() {
    setVisibility(false);
  }

  async function updateDeadline(p: Proposal) {
    const currentBlockHeight = await arweave.network
      .getInfo()
      .then((info) => info.height);
    const deadline = estimateDeadlineDate(p.deadline, currentBlockHeight);
    setDeadlineMs(deadline);
  }

  if (!visible) return <></>;
  if (!proposal)
    return (
      <div
        className="absolute left-0 top-0 z-50 flex size-full items-center justify-center bg-black/75 bg-opacity-50"
        data-test-id="create-proposal-modal-container"
      >
        {' '}
        <Spinner size={200} />{' '}
      </div>
    );
  return (
    <div
      className="absolute left-0 top-0 z-50 flex size-full items-center justify-center bg-black/75 bg-opacity-50"
      data-test-id="view-proposal-modal-container"
    >
      <div
        className="flex size-3/4 flex-col gap-5 rounded-lg border-2 border-control-secondary bg-surface-secondary p-4"
        data-test-id="view-proposal-modal-container"
      >
        <h1 className="flex w-full justify-center p-4 text-2xl">
          {proposal.title}
        </h1>
        <div className="border-box flex size-full flex-row items-center justify-center gap-5">
          <div
            className="size-full rounded bg-surface-primary p-2"
            id="proposal-description"
          ></div>
          <div className="h-full w-2/5 rounded bg-surface-primary p-2">
            <List>
              <List.Item>
                <List.Item.Meta
                  title="ID"
                  description={
                    <Link
                      to={`https://arscan.io/tx/${proposal.id}`}
                      target="_blank"
                    >
                      {shortTransactionId(proposal.id)}
                    </Link>
                  }
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title="Author"
                  description={
                    <Link
                      to={`https://arscan.io/address/${proposal.author}`}
                      target="_blank"
                    >
                      {authorProfile?.profile.handleName ??
                        shortTransactionId(proposal.author)}{' '}
                      <Avatar src={authorProfile?.profile.avatarURL} />
                    </Link>
                  }
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title="Votes"
                  description={
                    <div className="flex items-center justify-between">
                      <span>
                        Yay: {votes.yay} | Nay: {votes.nay}
                      </span>
                      <button
                        onClick={() => setShowVoteModal(true)}
                        className="rounded bg-control-secondary p-1 text-text-primary hover:bg-surface-secondary hover:text-highlight"
                      >
                        Vote
                      </button>
                    </div>
                  }
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title="Proposed Memeframe ID"
                  description={
                    proposal.memeframeId ? (
                      <Link to={`https://arweave.net/${proposal.memeframeId}`}>
                        {proposal.memeframeId}
                      </Link>
                    ) : (
                      'No Memeframe ID'
                    )
                  }
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title="Status"
                  description={
                    <Tag color={proposal.status === 'active' ? 'green' : 'red'}>
                      {proposal.status}
                    </Tag>
                  }
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title={`Estimated Deadline [block ${proposal.deadline}]`}
                  description={new Date(deadlineMs).toDateString()}
                />
              </List.Item>
            </List>
          </div>
        </div>
        <div
          className="flex w-full flex-row justify-end gap-5"
          data-test-id="view-proposal-modal-controls"
        >
          <button
            className="w-full rounded border-2 border-black/0 bg-control-secondary/10 p-1 text-text-primary/50 hover:border-error/50 hover:bg-surface-secondary hover:text-error/50"
            onClick={close}
            data-test-id="view-proposal-modal-close-button"
          >
            Close
          </button>
        </div>
      </div>
      <Vote
        visible={showVoteModal}
        setVisibility={setShowVoteModal}
        proposalId={proposal.id}
      />
    </div>
  );
}

export default ViewProposal;
