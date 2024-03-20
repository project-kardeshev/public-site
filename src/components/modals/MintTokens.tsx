import { errorEmitter, notificationEmitter } from '@src/services/events';
import { useGlobalState } from '@src/services/state/useGlobalState';
import { useState } from 'react';
import { GrDebian } from 'react-icons/gr';

import NumberInput from '../NumberInput';

function MintTokens({
  visible,
  setVisibility,
}: {
  visible: boolean;
  setVisibility: (visible: boolean) => void;
}) {
  const [mintAmount, setMintAmount] = useState(0);
  const {
    kardBalance,
    credBalance,
    aoDataProvider,
    walletAddress,
    setKardBalance,
    setCredBalance,
  } = useGlobalState();

  function close() {
    setVisibility(false);
  }

  async function mint() {
    try {
      if (mintAmount > credBalance) {
        throw new Error('Insufficient $CRED balance');
      }
      notificationEmitter.emit('info', `Minting ${mintAmount} $KARD`);
      const txid = await aoDataProvider.mintTokens({ amount: mintAmount });
      const newKardBalance = kardBalance + mintAmount;
      notificationEmitter.emit(
        'info',
        `Minted ${mintAmount} $KARD. Transaction ID: ${txid}. New $KARD balance: ${newKardBalance}`,
      );
      const newCredBalance = await aoDataProvider.getCredBalance(walletAddress);
      setCredBalance(newCredBalance);
      setKardBalance(newKardBalance);
      close();
    } catch (e) {
      errorEmitter.emit('error', e);
    }
  }

  if (!visible) return <></>;
  return (
    <div
      className="absolute left-0 top-0 z-50 flex size-full items-center justify-center bg-black/75 bg-opacity-50"
      data-test-id="mint-modal-container"
    >
      <div className="flex h-fit w-1/2 flex-col gap-10 rounded-lg border-2 border-control-secondary bg-surface-secondary p-4">
        <h1 className="flex w-full justify-center p-4 text-2xl">MINT $KARD</h1>
        <div className="border-box flex size-full flex-col justify-center gap-5">
          <div className="w-full">
            <span className="flex h-10 w-full items-center">
              MINT {mintAmount} $CRED To {mintAmount} $KARD&nbsp;
              <GrDebian size={15} fill="green" className="hover:animate-spin" />
            </span>
            <NumberInput
              value={mintAmount}
              setValue={(v: number) => setMintAmount(v)}
              placeholder="Mint Amount"
              min={0}
              max={credBalance}
              predicate={(v: number) => v < credBalance}
            />
          </div>
        </div>
        <div
          className="flex w-full flex-row items-center justify-between gap-5 p-2"
          data-test-id="mint-modal-controls"
        >
          {credBalance < 1 ? (
            <span className="text-error">Insufficient $CRED balance</span>
          ) : (
            <span className="flex items-center justify-center text-text-secondary">
              $CRED Balance: {credBalance}
            </span>
          )}
          <div className="flex items-center justify-center gap-5">
            <button
              className="rounded border-2 border-black/0 bg-control-secondary/10 p-1 text-text-primary/50 hover:border-error/50 hover:bg-surface-secondary hover:text-error/50"
              onClick={close}
              data-test-id="mint-modal-close-button"
            >
              CANCEL
            </button>
            <button
              className={`rounded border-2 border-highlight/0 bg-success/10 p-1 text-success hover:border-highlight hover:bg-surface-secondary  hover:text-highlight`}
              onClick={mint}
              data-test-id="mint-modal-close-button"
            >
              MINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintTokens;
