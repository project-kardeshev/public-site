import { ArAccount } from 'arweave-account';

import { Bounty } from './bounty';

export type Proposal = {
  id: string; // the id of the transaction used to create the proposal
  author: string;
  title: string;
  description: string;
  votes: {
    yay: { [address: string]: number }; // address: tokens staked
    nay: { [address: string]: number };
  };
  status: string; // 'active' | 'declined' | 'accepted'
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

export type VoteType = 'yay' | 'nay';
