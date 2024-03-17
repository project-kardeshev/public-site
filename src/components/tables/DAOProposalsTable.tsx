import { shortTransactionId } from '@src/utils';
import { Space, Tag } from 'antd';
import { startCase } from 'lodash';
import { Proposal } from 'types/dao';

import { DataColumn, DataTable } from './common';

const stubData: Proposal[] = [
  {
    title: 'Proposal 1',
    id: '0x123'.padEnd(43, '0'),

    description: 'This is a proposal',
    votes: ['0x123', '0x456'],
    status: 'active',
  },
];

function daoProposalsColumnsGenerator(data: Record<string, any>): DataColumn[] {
  const renderKeys = ['title', 'id', 'votes', 'status'];

  return Object.keys(data)
    .map((key, index) => {
      if (!renderKeys.includes(key)) {
        return;
      }
      return new DataColumn({
        key: index.toString(),
        title: startCase(key),
        dataIndex: key,
        render: (value: any) => {
          switch (key) {
            case 'title':
              return value;
            case 'id':
              return shortTransactionId(value);
            case 'votes':
              return value.length;
            case 'status':
              return (
                <Space>
                  <Tag color={value === 'active' ? 'green' : 'red'}>
                    {value}
                  </Tag>
                </Space>
              );
            default:
              return value;
          }
        },
      });
    })
    .filter((column) => column !== undefined) as DataColumn[];
}

function DAOProposalsTable() {
  return (
    <>
      {' '}
      <DataTable
        columnGenerator={daoProposalsColumnsGenerator}
        defaultColumns={daoProposalsColumnsGenerator(stubData[0])}
        requestCacheKey="dao-proposals"
        dataFetcher={async () => stubData}
      />
    </>
  );
}

export default DAOProposalsTable;
