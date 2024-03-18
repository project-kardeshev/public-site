import { useState } from 'react';

import CreateProposal from '../components/modals/CreateProposal';
import DAOProposalsTable from '../components/tables/DAOProposalsTable';

function Dao() {
  const [showCreateProposal, setShowCreateProposal] = useState(false);
  return (
    <div className={'flex size-full flex-col'}>
      <div className="flex w-full flex-row justify-between p-2">
        <div>
          <h1 className="text-xl text-text-secondary">DAO</h1>
        </div>

        <div>
          <button
            className="rounded bg-control-secondary p-2 hover:bg-surface-secondary hover:text-highlight"
            onClick={() => setShowCreateProposal(true)}
          >
            Create
          </button>
        </div>
      </div>
      <DAOProposalsTable />
      <CreateProposal
        visible={showCreateProposal}
        setVisibility={(visible: boolean) => setShowCreateProposal(visible)}
      />
    </div>
  );
}

export default Dao;
