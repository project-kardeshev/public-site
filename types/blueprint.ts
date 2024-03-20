export type Blueprint = {
  title: string;
  description: string;
  fileName: string;
  owners: string[];
  tokenId: number;
  royaltySettings: RoyaltySettings;
};

export type RoyaltySettings = {
  royaltyBps: number;
  royaltyAddress: string;
  license: string;
};
