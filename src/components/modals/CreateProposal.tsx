import { useState } from "react";
import Spinner from "../loading/Spinner";

import { validateArweaveId, validateArweaveIdPartial } from "@src/utils";
import RichTextArea from "../text/RichTextArea";

function CreateProposal({ visible, setVisibility }: { visible: boolean, setVisibility: (visible: boolean) => void }) {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [memeframeId, setMemeframeId] = useState("");
    const [description, setDescription] = useState("");

    function close() {
        setLoading(false);
        setTitle("");
        setMemeframeId("");
        setDescription("");
        setVisibility(false);
    }

    if (!visible) return (<></>);
    return (
        <div
            className="absolute w-full h-full bg-black/75 z-50 top-0 left-0 flex items-center justify-center bg-opacity-50"
            data-test-id="create-proposal-modal-container">
            <div
                className="w-3/4 h-3/4 bg-surface-secondary flex flex-col border-2 border-control-secondary rounded-lg p-4"
                data-test-id="create-proposal-modal-container"
            >
                <h1 className="w-full justify-center flex p-4 text-2xl">Create Proposal</h1>
                <div className="flex flex-col w-full h-full justify-center items-center border-box gap-5">
                    {loading ? <Spinner size={200} /> : <></>}

                    <div className="w-full">
                        <label className="w-full">Title</label>
                        <input
                            type="text"
                            className="w-full border-box bg-black/10 rounded p-2 border-2 border-control-secondary"
                            placeholder="Proposal Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            data-test-id="create-proposal-modal-title-input"
                        />
                    </div>

                    <div className="w-full">
                        <label className="w-full">New Memeframe ID <span className="text-text-secondary">(optional)</span></label>
                        <input
                            type="text"
                            className="w-full border-box bg-black/10 rounded p-2 border-2 border-control-secondary"
                            placeholder="Memeframe ID"
                            value={memeframeId}
                            onChange={(e) => {
                                if (!validateArweaveIdPartial(e.target.value.trim())) {
                                    return
                                }
                                setMemeframeId(e.target.value.trim())
                            }}
                            data-test-id="create-proposal-modal-title-input"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col border-box">
                        <label className="w-full">Description <span className="text-text-secondary">(optional)</span></label>
                        <RichTextArea value={description} setValue={setDescription} />
                    </div>

                </div>
                <div
                    className="flex flex-row w-full justify-end p-2 gap-5"
                    data-test-id="create-proposal-modal-controls">
                    <button
                        className="rounded bg-control-secondary hover:bg-surface-secondary hover:text-highlight p-1"
                        onClick={close}
                        data-test-id="create-proposal-modal-close-button"
                    >
                        Cancel
                    </button>
                    <button
                        className="rounded bg-control-tertiary hover:bg-control-primary hover:text-highlight p-1"
                        onClick={() => setLoading(true)}
                        data-test-id="create-proposal-modal-submit-button"
                    >
                        Create
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CreateProposal;