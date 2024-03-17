import { Space, Tag } from 'antd';
import { startCase } from 'lodash';
import { Blueprint } from 'types/blueprint';

import { DataColumn, DataTable } from './common';

const stubData: Blueprint[] = [
  {
    title: 'CNC machine',
    description: 'High Precision CNC machine',
    fileName: 'cnc.zip',
    owners: ['0x123', '0x456'],
    tokenId: 1,
    royaltySettings: {
      royaltyBps: 100,
      royaltyAddress: '0x123',
      license: 'UDL',
    },
  },
];

function blueprintsColumnsGenerator(data: Record<string, any>): DataColumn[] {
  const renderKeys = ['title', 'tokenId', 'royaltySettings', 'owners'];

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
            case 'tokenId':
              return `${value} ${record.currency}`;
            case 'royaltySettings':
              return (
                <Space>
                  {Object.entries(value).map(
                    ([setting, settingValue], index: number) => (
                      <Tag key={index} color="orange">
                        {setting}: {settingValue as any}
                      </Tag>
                    ),
                  )}
                </Space>
              );
            case 'owners':
              return value.length;
            default:
              return value;
          }
        },
      });
    })
    .filter((column) => column !== undefined) as DataColumn[];
}

function BlueprintsTable() {
  return (
    <>
      {' '}
      <DataTable
        columnGenerator={blueprintsColumnsGenerator}
        defaultColumns={blueprintsColumnsGenerator(stubData[0])}
        requestCacheKey="blueprints"
        dataFetcher={async () => stubData}
      />
    </>
  );
}

export default BlueprintsTable;
