import { shortTransactionId } from '@src/utils';
import { startCase } from 'lodash';
import { DaoMember } from 'types/dao';

import { DataColumn, DataTable } from './common';

const stubData: DaoMember[] = [
  {
    address: ''.padEnd(43, '1'),
    proposals: [
      {
        title: 'Proposal 1',
        id: '0x123'.padEnd(43, '0'),
        description: 'This is a proposal',
        votes: {
          [''.padEnd(43, '1')]: {
            yay: 0,
            nay: 0,
          },
        },
        status: 'active',
        author: ''.padEnd(43, '1'),
        deadline: Date.now(),
      },
    ],
    blueprints: [''.padEnd(43, '1')],
    bounties: [
      {
        id: '0x123',
        title: 'Bounty 1',
        description: 'Bounty 1',
        price: 1,
        currency: 'USD',
        sponsors: [
          { name: 'me', address: '0x123', image: 'https://google.com' },
        ],
        resources: [
          {
            title: 'Resource 1',
            url: 'https://google.com',
          },
        ],
        terms: ['term 1', 'term 2'],
        expiration: Date.now(),
        requiresApproval: false,
      },
    ],
    tokenBalance: 100,
  },
];

function kardesheviansColumnsGenerator(
  data: Record<string, any>,
): DataColumn[] {
  const renderKeys = ['address', 'proposals', 'blueprints', 'bounties'];

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
            case 'address':
              return shortTransactionId(value);
            case 'proposals':
              return value.length;
            case 'blueprints':
              return value.length;
            case 'bounties':
              return value.length;
            default:
              return value;
          }
        },
      });
    })
    .filter((column) => column !== undefined) as DataColumn[];
}

function KardesheviansTable() {
  return (
    <>
      {' '}
      <DataTable
        columnGenerator={kardesheviansColumnsGenerator}
        defaultColumns={kardesheviansColumnsGenerator(stubData[0])}
        requestCacheKey="kardeshevians"
        dataFetcher={async () => stubData}
      />
    </>
  );
}

export default KardesheviansTable;
