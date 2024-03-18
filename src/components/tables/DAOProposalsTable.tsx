import { shortTransactionId } from '@src/utils';
import { Space, Tag } from 'antd';
import { startCase } from 'lodash';
import { Proposal } from 'types/dao';

import { DataColumn, DataTable } from './common';
import ViewProposal from '../modals/ViewProposal';
import { useState } from 'react';

const stubData: Proposal[] = [
  {
    title: 'Proposal 1',
    id: '0x123'.padEnd(43, '0'),

    description: 'This is a proposal',
    votes: {
      yay: ['0x123'.padEnd(43, '0')],
      nay: [],
    },
    status: 'active',
    author: "7waR8v4STuwPnTck1zFVkQqJh5K9q9Zik4Y5-5dV7nk",
    deadline: Date.now()
  },
];

function daoProposalsColumnsGenerator(data: Record<string, any>, viewProposal: (proposal: Proposal) => void): DataColumn[] {
  const renderKeys = ['title', 'id', 'votes', 'status', 'action'];

  const columns = Object.keys({ ...data, action: '' })
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
            case 'action':
              return (
                <button className="bg-control-secondary p-1 rounded text-text-primary hover:bg-surface-secondary hover:text-highlight" onClick={() => viewProposal(data as Proposal)}>View</button>
              );
            default:
              return value;
          }
        },
      });
    })
    .filter((column) => column !== undefined) as DataColumn[];
  return columns;
}

function DAOProposalsTable() {
  const [showViewProposal, setShowViewProposal] = useState(false);
  const [proposal, setProposal] = useState<Proposal>();
  return (
    <>
      {' '}
      <DataTable
        columnGenerator={(a) => daoProposalsColumnsGenerator(a, (proposal) => {
          setProposal(proposal)
          setShowViewProposal(true)
        })}
        defaultColumns={daoProposalsColumnsGenerator(stubData[0], (proposal) => {
          setProposal(proposal)
          setShowViewProposal(true)
        })}
        requestCacheKey="dao-proposals"
        dataFetcher={async () => stubData}
      />
      {proposal ? <ViewProposal
        visible={showViewProposal}
        setVisibility={(visible: boolean) => {
          if (!visible) {
            setProposal(undefined)
          }
          setShowViewProposal(visible)
        }}
        proposal={proposal}
      /> : <></>}

    </>
  );
}

export default DAOProposalsTable;
