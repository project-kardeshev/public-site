/* eslint-disable */
import { createDataItemSigner, dryrun, message } from '@permaweb/aoconnect';
import { CRED_PROCESS_ID, DAO_PROCESS_ID } from '@src/constants';
import { ArAccount } from 'arweave-account';
import { Proposal } from 'types/dao';

interface AoClientInterface {
  // read
  getProposals: () => Promise<Record<string, Omit<Proposal, 'id'>>>;
  getKardBalance: (address: string) => Promise<number>;
  getKardBalances: () => Promise<Record<string, number>>;
  getCredBalance: (address: string) => Promise<number>;
  getCredBalances: () => Promise<Record<string, number>>;
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
  mintTokens: (props: { amount: number }) => Promise<string>;
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

  async getProposals(): Promise<Record<string, Omit<Proposal, 'id'>>> {
    const res = await dryrun({
      process: this.process,
      tags: [{ name: 'Action', value: 'GetProposals' }],
    });
    console.log(res);
    return JSON.parse(res.Messages[0].Data);
  }

  async getKardBalance(address: string) {
    const { Messages } = await dryrun({
      process: this.process,
      tags: [{ name: 'Action', value: 'Balance' }],
      Owner: address,
    });

    return parseInt(Messages[0].Data);
  }

  async getKardBalances() {
    const { Messages } = await dryrun({
      process: this.process,
      tags: [{ name: 'Action', value: 'Balances' }],
    });
    return Messages[0].data;
  }

  async getCredBalance(address: string) {
    const res = await dryrun({
      process: CRED_PROCESS_ID,
      tags: [{ name: 'Action', value: 'Balance' }],
      Owner: address,
    });

    return parseInt(res.Messages[0].Data);
  }

  async getCredBalances(process: string = this.process) {
    const {
      Output: { Data },
    } = await dryrun({
      process: CRED_PROCESS_ID,
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
    const messageId = await message({
      process: this.process,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        { name: 'Action', value: 'Propose' },
        { name: 'Title', value: props.title },
        { name: 'Description', value: props.description },
        { name: 'Stake', value: props.stakeAmount.toString() },
      ],
    });
    return messageId;
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

  async mintTokens(props: { amount: number }) {
    const messageId = await message({
      process: CRED_PROCESS_ID,
      signer: createDataItemSigner(window.arweaveWallet),
      tags: [
        { name: 'Action', value: 'Transfer' },
        { name: 'Quantity', value: props.amount.toString() },
        { name: 'Recipient', value: this.process },
      ],
    });
    return messageId;
  }
}

export default AoDataProvider;
