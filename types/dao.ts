import { ArAccount } from 'arweave-account';

import { Bounty } from './bounty';

export type Proposal = {
  id: string;
  author: string;
  title: string;
  description: string;
  votes: {
    yay: string[],
    nay: string[],
  };
  status: string;
  deadline: number; // blockheight
};

export type DaoMember = {
  address: string;
  proposals: Proposal[];
  blueprints: string[];
  bounties: Bounty[];
  tokenBalance: number;
  profile?: ArAccount;
};
