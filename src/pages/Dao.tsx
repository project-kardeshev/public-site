import CreateProposal from '../components/modals/CreateProposal';
import DAOProposalsTable from '../components/tables/DAOProposalsTable';
import { useState } from 'react';

function Dao() {
  const [showCreateProposal, setShowCreateProposal] = useState(false);
  return (
    <div className={'size-full flex flex-col'}>
      <div className='flex flex-row justify-between w-full p-2'>
        <div>
          <h1 className='text-xl text-text-secondary'>DAO</h1>
        </div>

        <div>
          <button className='rounded bg-control-secondary hover:bg-surface-secondary hover:text-highlight p-2' onClick={() => setShowCreateProposal(true)}>Create</button>
        </div>

      </div>
      <DAOProposalsTable />
      <CreateProposal visible={showCreateProposal} setVisibility={(visible: boolean) => setShowCreateProposal(visible)} />
    </div>
  );
}

export default Dao;
