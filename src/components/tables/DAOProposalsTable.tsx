import { useGlobalState } from '@src/services/state/useGlobalState';
import { getTotalVotes, shortTransactionId } from '@src/utils';
import { Space, Tag } from 'antd';
import { startCase } from 'lodash';
import { useState } from 'react';
import { Proposal } from 'types/dao';

import ViewProposal from '../modals/ViewProposal';
import { DataColumn, DataTable } from './common';

const stubData: Proposal[] = [
  {
    title: 'Proposal 1',
    id: '0x123'.padEnd(43, '0'),

    description: 'This is a proposal',
    votes: {
      ['b'.padEnd(43, '1')]: { yay: 1, nay: 0 },
    },
    status: 'active',
    author: '7waR8v4STuwPnTck1zFVkQqJh5K9q9Zik4Y5-5dV7nk',
    deadline: Date.now(),
  },
];

function daoProposalsColumnsGenerator(
  data: Record<string, any>,
  viewProposal: (proposal: Proposal) => void,
): DataColumn[] {
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
        render: (value: any, record: Record<any, any>) => {
          switch (key) {
            case 'title':
              return value;
            case 'id':
              return shortTransactionId(value);
            case 'votes': {
              const parsed = getTotalVotes(value);
              return (
                <span>
                  yay: {parsed?.yay} | nay: {parsed?.nay}
                </span>
              );
            }
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
                <button
                  className="rounded bg-control-secondary p-1 text-text-primary hover:bg-surface-secondary hover:text-highlight"
                  onClick={() => viewProposal(record as Proposal)}
                >
                  View
                </button>
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
  const { aoDataProvider } = useGlobalState();
  const [showViewProposal, setShowViewProposal] = useState(false);
  const [proposal, setProposal] = useState<Proposal>();
  const [dataRequestKey, setDataRequestKey] = useState(
    'dao-proposals' + Date.now(),
  );

  function refresh() {
    setDataRequestKey('dao-proposals' + Date.now());
  }

  const proposalsFetcher = async () => {
    const proposals = await aoDataProvider.getProposals();
    const data = Object.entries(proposals).map(([key, value]) => {
      return {
        id: key,
        ...value,
      };
    });
    return data;
  };

  return (
    <>
      <DataTable
        columnGenerator={(a) =>
          daoProposalsColumnsGenerator(a, (proposal: Proposal) => {
            setProposal(proposal);
            setShowViewProposal(true);
          })
        }
        defaultColumns={daoProposalsColumnsGenerator(
          stubData[0],
          (proposal) => {
            setProposal(proposal);
            setShowViewProposal(true);
          },
        )}
        requestCacheKey={dataRequestKey}
        dataFetcher={proposalsFetcher}
      />

      <ViewProposal
        visible={showViewProposal}
        setVisibility={(visible: boolean) => {
          if (!visible) {
            setProposal(undefined);
          }
          setShowViewProposal(visible);
          refresh();
        }}
        proposal={proposal}
      />
    </>
  );
}

export default DAOProposalsTable;
