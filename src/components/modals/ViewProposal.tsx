import { useEffect, useState } from "react";
import Spinner from "../loading/Spinner";
import { Proposal } from "types/dao";
import { Avatar, List, Tag } from "antd";
import Account, { ArAccount } from "arweave-account";
import { Link } from "react-router-dom";
import { shortTransactionId } from "@src/utils";

function ViewProposal({
    visible,
    setVisibility,
    proposal
}: {
    visible: boolean,
    setVisibility: (visible: boolean) => void,
    proposal: Proposal
}) {
    const [authorProfile, setAuthorProfile] = useState<ArAccount>()

    useEffect(() => {
        const descriptionElement = document.getElementById('proposal-description')
        if (descriptionElement) {

            descriptionElement.innerHTML = proposal.description
        }
        new Account().get(proposal.author).then((account: ArAccount) => {
            setAuthorProfile(account)
        });
    }, [proposal]);


    function close() {
        setVisibility(false);
    }

    if (!visible) return (<></>);
    return (
        <div
            className="absolute w-full h-full bg-black/75 z-50 top-0 left-0 flex items-center justify-center bg-opacity-50"
            data-test-id="view-proposal-modal-container">
            <div
                className="w-3/4 h-3/4 bg-surface-secondary flex flex-col border-2 border-control-secondary rounded-lg p-4"
                data-test-id="view-proposal-modal-container"
            >
                <h1 className="w-full justify-center flex p-4 text-2xl">{proposal.title}</h1>
                <div className="flex flex-row w-full h-full justify-center items-center border-box gap-5">
                    <div className="w-full h-full rounded bg-surface-primary p-2" id="proposal-description"></div>
                    <div className="w-2/5 h-full rounded bg-surface-primary p-2 rounded">
                        <List>
                            <List.Item>
                                <List.Item.Meta
                                    title="ID"
                                    description={<Link to={`https://arscan.io/tx/${proposal.id}`} target="_blank">{shortTransactionId(proposal.id)}</Link>}
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    title="Author"
                                    description={<Link to={`https://arscan.io/address/${proposal.author}`} target="_blank">{authorProfile?.profile.handleName ?? shortTransactionId(proposal.author)} <Avatar src={authorProfile?.profile.avatarURL} /></Link>}
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    title="Votes"
                                    description={<div className="flex justify-between items-center"><span>Yay: {proposal.votes.yay.length} | Nay: {proposal.votes.nay.length}</span><button className="bg-control-secondary p-1 rounded text-text-primary hover:text-highlight hover:bg-surface-secondary">Vote</button></div>}
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    title="Status"
                                    description={<Tag color={proposal.status === 'active' ? 'green' : 'red'}>
                                        {proposal.status}
                                    </Tag>}
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    title="Deadline"
                                    description={new Date(proposal.deadline).toDateString()}
                                />
                            </List.Item>
                        </List>
                    </div>
                </div>
                <div
                    className="flex flex-row w-full justify-end p-2 gap-5"
                    data-test-id="view-proposal-modal-controls">
                    <button
                        className="rounded bg-control-secondary hover:bg-surface-secondary hover:text-highlight p-1"
                        onClick={close}
                        data-test-id="view-proposal-modal-close-button"
                    >
                        Close
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ViewProposal;