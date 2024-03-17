import { shortTransactionId } from '@src/utils';
import { Space, Tag } from 'antd';
import { startCase } from 'lodash';
import { TokenTransaction } from 'types/token';

import { DataColumn, DataTable } from './common';

const stubData: TokenTransaction[] = [
  {
    id: ''.padEnd(43, '7'),
    contractTxId: '0x123'.padEnd(43, '7'),
    tokenId: '1',
    from: '0x123'.padEnd(43, '7'),
    to: '0x456'.padEnd(43, '7'),
    amount: '100',
    currency: 'KARD',
    timestamp: '2021-10-10',
    status: 'confirmed',
    tags: [{ name: 'Royalty', value: '100' }],
  },
];

function tokenTransactionsColumnsGenerator(
  data: Record<string, any>,
): DataColumn[] {
  const renderKeys = ['id', 'to', 'from', 'amount', 'status', 'tags'];

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
            case 'id':
              return shortTransactionId(value);
            case 'to':
              return shortTransactionId(value);
            case 'from':
              return shortTransactionId(value);
            case 'amuont':
              return shortTransactionId(value);
            case 'status':
              return value;
            case 'tags':
              return (
                <>
                  <Space>
                    {value.map((tag: { name: string; value: string }) => {
                      <Tag key={index} color="orange">
                        {tag.name}: {tag.value}
                      </Tag>;
                    })}
                  </Space>
                </>
              );
            default:
              return value;
          }
        },
      });
    })
    .filter((column) => column !== undefined) as DataColumn[];
}

function TokenTransactionsTable() {
  return (
    <>
      {' '}
      <DataTable
        columnGenerator={tokenTransactionsColumnsGenerator}
        defaultColumns={tokenTransactionsColumnsGenerator(stubData[0])}
        requestCacheKey="token-transactions"
        dataFetcher={async () => stubData}
      />
    </>
  );
}

export default TokenTransactionsTable;
