import DAOProposalsTable from '../components/tables/DAOProposalsTable';

function Dao() {
  return (
    <div className={'flex size-full flex-col'}>
      <div className="flex w-full flex-row justify-between p-2">
        <div>
          <h1 className="text-xl text-text-secondary">DAO</h1>
        </div>

        <div></div>
      </div>
      <DAOProposalsTable />
    </div>
  );
}

export default Dao;
