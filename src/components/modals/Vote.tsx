import { Proposal } from 'types/dao';

function Vote({
  visible,
  setVisibility,
  proposal,
}: {
  visible: boolean;
  setVisibility: (visible: boolean) => void;
  proposal: Proposal;
}) {
  function close() {
    setVisibility(false);
  }

  if (!visible) return <></>;
  return (
    <div
      className="w-400 h-300 absolute left-0 top-0 z-50 flex items-center justify-center"
      data-test-id="vote-modal-container"
    >
      <div
        className="flex size-3/4 flex-col rounded-lg border-2 border-control-secondary bg-surface-secondary p-4"
        data-test-id="vote-modal-container"
      >
        <h1 className="flex w-full justify-center p-4 text-2xl">
          {proposal.title}
        </h1>
        <div className="border-box flex size-full flex-row items-center justify-center gap-5"></div>
        <div
          className="flex w-full flex-row justify-end gap-5 p-2"
          data-test-id="vote-modal-controls"
        >
          <button
            className="rounded bg-control-secondary p-1 hover:bg-surface-secondary hover:text-highlight"
            onClick={close}
            data-test-id="vote-modal-close-button"
          >
            Cancel
          </button>
          <button
            className="rounded bg-control-secondary p-1 hover:bg-surface-secondary hover:text-highlight"
            onClick={close}
            data-test-id="vote-modal-close-button"
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vote;
