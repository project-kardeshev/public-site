/* eslint-disable */
import { createDataItemSigner, dryrun, message } from '@permaweb/aoconnect';
import { DAO_PROCESS_ID } from '@src/constants';
import { ArAccount } from 'arweave-account';
import { Proposal } from 'types/dao';

interface AoClientInterface {
  // read
  getProposals: (props: {
    address?: string;
  }) => Promise<Record<string, Omit<Proposal, 'id'>>>;
  getBalance: (address: string) => Promise<number>;
  getMessages: (address: string) => Promise<Record<string, any>[]>;
  // write
  vote: (props: {
    proposalId: string;
    vote: 'yay' | 'nay';
    stakeAmount: number;
  }) => Promise<string>;
  createProposal: (props: {
    title: string;
    description: string;
    stakeAmount: number;
  }) => Promise<string>;
  transferTokens: (props: { to: string; amount: number }) => Promise<string>;
  mintTokens: (props: { to: string; amount: number }) => Promise<string>;
  subscribe: (props: { address: string }) => Promise<void>;
  unsubscribe: (props: { address: string }) => Promise<void>;
}
class AoDataProvider implements AoClientInterface {
  process: string;
  constructor(
    props: {
      process: string;
    } = { process: DAO_PROCESS_ID },
  ) {
    this.process = props.process;
  }

  async getProposals(props: { address?: string }) {
    const { Output } = await dryrun({
      process: this.process,
      Action: 'GetProposals',
    });
    return Output;
  }

  async getBalance(address: string) {
    const {
      Output: { Balance },
    } = await dryrun({
      process: this.process,
      Action: 'TokenBalance',
      Recipient: address,
    });
    return Balance;
  }

  async getBalances() {
    const {
      Output: { Data },
    } = await dryrun({
      process: this.process,
      Action: 'TokenBalances',
    });
    return Data;
  }

  async getMessages(address: string) {
    return [];
  }

  async vote(props: {
    proposalId: string;
    vote: 'yay' | 'nay';
    stakeAmount: number;
  }) {
    const messageId = await message({
      process: this.process,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        { name: 'Action', value: 'Vote' },
        { name: 'ProposalId', value: props.proposalId },
        { name: 'Vote', value: props.vote },
        { name: 'Stake', value: props.stakeAmount.toString() },
      ],
    });
    return messageId;
  }

  async createProposal(props: {
    title: string;
    description: string;
    stakeAmount: number;
  }) {
    return '';
  }

  async transferTokens(props: { to: string; amount: number }) {
    return '';
  }

  async subscribe(props: { address: string }) {
    return;
  }

  async unsubscribe(props: { address: string }) {
    return;
  }

  async mintTokens(props: { to: string; amount: number }) {
    const messageId = await message({
      process: this.process,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        { name: 'Action', value: 'Mint' },
        { name: 'Quantity', value: props.to },
        { name: 'Amount', value: props.amount.toString() },
      ],
    });
    return '';
  }
}

export default AoDataProvider;
