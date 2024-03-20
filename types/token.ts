export type TokenTransaction = {
  id: string;
  contractTxId: string;
  tokenId?: string;
  from: string;
  to: string;
  amount: string;
  currency: string;
  timestamp: string;
  status: string;
  tags: { name: string; value: string }[];
};
