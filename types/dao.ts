import { ArAccount } from 'arweave-account';

import { Bounty } from './bounty';

export type Proposal = {
  id: string;
  title: string;
  description: string;
  votes: string[];
  status: string;
};

export type DaoMember = {
  address: string;
  proposals: Proposal[];
  blueprints: string[];
  bounties: Bounty[];
  tokenBalance: number;
  profile?: ArAccount;
};
