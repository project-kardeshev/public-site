import { useEffect, useState } from "react";
import Spinner from "../loading/Spinner";
import { Proposal } from "types/dao";
import { Avatar, List } from "antd";
import Account, { ArAccount } from "arweave-account";
import { Link } from "react-router-dom";
import { shortTransactionId } from "@src/utils";

function Vote({
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
            className="absolute w-400 h-300 z-50 top-0 left-0 flex items-center justify-center"
            data-test-id="vote-modal-container">
            <div
                className="w-3/4 h-3/4 bg-surface-secondary flex flex-col border-2 border-control-secondary rounded-lg p-4"
                data-test-id="vote-modal-container"
            >
                <h1 className="w-full justify-center flex p-4 text-2xl">{proposal.title}</h1>
                <div className="flex flex-row w-full h-full justify-center items-center border-box gap-5">

                </div>
                <div
                    className="flex flex-row w-full justify-end p-2 gap-5"
                    data-test-id="vote-modal-controls">
                    <button
                        className="rounded bg-control-secondary hover:bg-surface-secondary hover:text-highlight p-1"
                        onClick={close}
                        data-test-id="vote-modal-close-button"
                    >
                        Cancel
                    </button>
                    <button
                        className="rounded bg-control-secondary hover:bg-surface-secondary hover:text-highlight p-1"
                        onClick={close}
                        data-test-id="vote-modal-close-button"
                    >
                        Vote
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Vote;