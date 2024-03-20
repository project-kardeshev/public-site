import { ArAccount } from 'arweave-account';

import { Bounty } from './bounty';

export type Proposal = {
  id: string; // the id of the transaction used to create the proposal
  author: string;
  title: string;
  description: string;
  votes: {
    [x: string]: { yay: number; nay: number };
  };
  status: 'active' | 'accepted' | 'declined';
  deadline: number; // blockheight
  memeframeId?: string;
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
