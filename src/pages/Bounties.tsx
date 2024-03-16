import { Space, Tag } from 'antd';
import { startCase } from 'lodash';
import { Bounty } from 'types/bounty';

import { DataColumn, DataTable } from '../components/tables/common';

const stubData: Bounty[] = [
  {
    title: 'Build a bounty indexer',
    description: 'This is a bounty',
    price: 100,
    currency: 'USD',
    sponsors: [
      {
        name: 'Sponsor 1',
        wallet: '0x123',
        image: 'https://via.placeholder.com/150',
      },
    ],
    resources: [{ title: 'Resource 1', url: 'https://example.com' }],
    terms: ['Intellectual Property', 'NDA', 'Background Check'],
    expiration: Date.now(),
    requiresApproval: false,
  },
];

function bountyColumnsGenerator(data: Record<string, any>): DataColumn[] {
  const renderKeys = ['title', 'price', 'expiration', 'terms'];

  return Object.keys(data)
    .map((key, index) => {
      if (!renderKeys.includes(key)) {
        return;
      }
      return new DataColumn({
        key: index.toString(),
        title: startCase(key),
        dataIndex: key,
        render: (value: any, record: Record<string, any>) => {
          switch (key) {
            case 'title':
              return value;
            case 'price':
              return `${value} ${record.currency}`;
            case 'expiration':
              return new Date(value).toLocaleString();
            case 'terms':
              return (
                <Space>
                  {value.map((term: string, index: number) => (
                    <Tag key={index} color="orange">
                      {term}
                    </Tag>
                  ))}
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

function Bounties() {
  return (
    <div className={'size-full'}>
      <DataTable
        columnGenerator={bountyColumnsGenerator}
        defaultColumns={bountyColumnsGenerator(stubData[0])}
        requestCacheKey="bounties"
        dataFetcher={async () => stubData}
      />
    </div>
  );
}

export default Bounties;
