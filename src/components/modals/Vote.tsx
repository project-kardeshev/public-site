import { useGlobalState } from '@src/services/state/useGlobalState';
import { useState } from 'react';
import { VoteType } from 'types/dao';

import NumberInput from '../NumberInput';

function Vote({
  visible,
  setVisibility,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  proposalId,
}: {
  visible: boolean;
  setVisibility: (visible: boolean) => void;
  proposalId: string;
}) {
  const [vote, setVote] = useState<VoteType>('yay');
  const [stakeAmount, setStakeAmount] = useState(0);
  const { kardBalance } = useGlobalState();

  function close() {
    setVisibility(false);
  }

  if (!visible) return <></>;
  return (
    <div
      className="absolute left-0 top-0 z-50 flex size-full items-center justify-center bg-black/75 bg-opacity-50"
      data-test-id="vote-modal-container"
    >
      <div
        className="flex size-1/2 flex-col rounded-lg border-2 border-control-secondary bg-surface-secondary p-4"
        data-test-id="vote-modal-container"
      >
        <h1 className="flex w-full justify-center p-4 text-2xl">
          Vote&nbsp;
          <span className={`${vote === 'nay' ? 'text-error' : 'text-success'}`}>
            {vote}
          </span>
        </h1>
        <div className="border-box flex size-full flex-col justify-center gap-5">
          <div className="flex size-full flex-row gap-5">
            <button
              onClick={() => setVote('yay')}
              className={`w-full rounded-lg border-2 border-text-secondary bg-background/75 p-2 text-4xl hover:border-success hover:text-success ${vote === 'yay' ? 'text-success' : ''}`}
            >
              Yay
            </button>
            <button
              onClick={() => setVote('nay')}
              className={`w-full rounded-lg border-2 border-text-secondary bg-background/75 p-2 text-4xl hover:border-error  hover:text-error ${vote === 'nay' ? 'text-error' : ''}`}
            >
              Nay
            </button>
          </div>
          <div className="w-full">
            <span className="w-full">
              STAKE {stakeAmount} $KARD FOR&nbsp;
              <span className={vote === 'yay' ? 'text-success' : 'text-error'}>
                {vote}
              </span>
            </span>
            <NumberInput
              value={stakeAmount}
              setValue={(v: number) => setStakeAmount(v)}
              placeholder="Stake Amount"
              min={0}
              max={kardBalance}
              step={1}
            />
          </div>
        </div>
        <div
          className="flex w-full flex-row items-center justify-between gap-5 p-2"
          data-test-id="vote-modal-controls"
        >
          {kardBalance < 1 ? (
            <span className="text-error">
              Insufficient $KARD balance - mint more
            </span>
          ) : (
            <span className="flex items-center justify-center text-text-secondary">
              $KARD Balance: {kardBalance}
            </span>
          )}
          <div className="flex items-center justify-center gap-5">
            <button
              className="rounded border-2 border-black/0 bg-control-secondary/10 p-1 text-text-primary/50 hover:border-error/50 hover:bg-surface-secondary hover:text-error/50"
              onClick={close}
              data-test-id="vote-modal-close-button"
            >
              Cancel
            </button>
            <button
              className={`rounded border-2 border-highlight/0 p-1 hover:bg-surface-secondary ${vote === 'yay' ? 'bg-success/10 text-success hover:border-highlight  hover:text-highlight' : 'bg-error/10 text-error hover:border-error'}`}
              onClick={close}
              data-test-id="vote-modal-close-button"
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
