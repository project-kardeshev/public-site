import { validateArweaveIdPartial } from '@src/utils';
import { useState } from 'react';

import Spinner from '../loading/Spinner';
import RichTextArea from '../text/RichTextArea';

function CreateProposal({
  visible,
  setVisibility,
}: {
  visible: boolean;
  setVisibility: (visible: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [memeframeId, setMemeframeId] = useState('');
  const [description, setDescription] = useState('');

  function close() {
    setLoading(false);
    setTitle('');
    setMemeframeId('');
    setDescription('');
    setVisibility(false);
  }

  if (!visible) return <></>;
  return (
    <div
      className="absolute left-0 top-0 z-50 flex size-full items-center justify-center bg-black/75 bg-opacity-50"
      data-test-id="create-proposal-modal-container"
    >
      <div
        className="flex size-3/4 flex-col rounded-lg border-2 border-control-secondary bg-surface-secondary p-4"
        data-test-id="create-proposal-modal-container"
      >
        <h1 className="flex w-full justify-center p-4 text-2xl">
          Create Proposal
        </h1>
        <div className="border-box flex size-full flex-col items-center justify-center gap-5">
          {loading ? <Spinner size={200} /> : <></>}

          <div className="w-full">
            <span className="w-full">Title</span>
            <input
              type="text"
              className="border-box w-full rounded border-2 border-control-secondary bg-black/10 p-2"
              placeholder="Proposal Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              data-test-id="create-proposal-modal-title-input"
            />
          </div>

          <div className="w-full">
            <span className="w-full">
              New Memeframe ID{' '}
              <span className="text-text-secondary">(optional)</span>
            </span>
            <input
              type="text"
              className="border-box w-full rounded border-2 border-control-secondary bg-black/10 p-2"
              placeholder="Memeframe ID"
              value={memeframeId}
              onChange={(e) => {
                if (!validateArweaveIdPartial(e.target.value.trim())) {
                  return;
                }
                setMemeframeId(e.target.value.trim());
              }}
              data-test-id="create-proposal-modal-title-input"
            />
          </div>

          <div className="border-box flex size-full flex-col">
            <span className="w-full">
              Description{' '}
              <span className="text-text-secondary">(optional)</span>
            </span>
            <RichTextArea value={description} setValue={setDescription} />
          </div>
        </div>
        <div
          className="flex w-full flex-row justify-end gap-5 p-2"
          data-test-id="create-proposal-modal-controls"
        >
          <button
            className="rounded bg-control-secondary p-1 hover:bg-surface-secondary hover:text-highlight"
            onClick={close}
            data-test-id="create-proposal-modal-close-button"
          >
            Cancel
          </button>
          <button
            className="rounded bg-control-tertiary p-1 hover:bg-control-primary hover:text-highlight"
            onClick={() => setLoading(true)}
            data-test-id="create-proposal-modal-submit-button"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProposal;
