import { errorEmitter, notificationEmitter } from '@src/services/events';
import { useGlobalState } from '@src/services/state/useGlobalState';
import { Avatar } from 'antd';
import 'arconnect';
import Account from 'arweave-account';
import { startCase } from 'lodash';
import { useEffect } from 'react';

const arweaveAccountOptions = {
  cacheIsActivated: true,
  cacheSize: 100,
  cacheTime: 60,
};

function Connect() {
  const { walletAddress, setWalletAddress, profile, setProfile } =
    useGlobalState();

  useEffect(() => {
    if (window.arweaveWallet) {
      window.arweaveWallet.getActiveAddress().then((address: string) => {
        setWalletAddress(address);
        new Account(arweaveAccountOptions).get(address).then((account: any) => {
          notificationEmitter.emit(
            'notification',
            `Connected. Welcome back, ${startCase(account?.profile.handleName)}!`,
          );
          setProfile(account);
        });
      });
    }
  }, []);

  async function connectArweaveWallet() {
    try {
      if (!window.arweaveWallet) {
        notificationEmitter.emit(
          'info',
          'Arweave wallet not found, install the ArConnect extension to connect. ArConnect is available for Chromium and Firefox at arconnect.io',
        );
      }
      await window.arweaveWallet.connect(['ACCESS_ADDRESS']);
      const address = await window.arweaveWallet.getActiveAddress();
      setWalletAddress(address);
      const account = await new Account(arweaveAccountOptions).get(address);
      setProfile(account);
    } catch (error: any) {
      errorEmitter.emit('error', `Error connecting wallet: ${error.message}`);
    }
  }
  return (
    <button
      onClick={connectArweaveWallet}
      className={`rounded bg-control-primary ${walletAddress ? 'pl-2' : 'p-2'} font-bold transition ease-in-out hover:bg-surface-secondary hover:text-highlight`}
    >
      {profile === undefined ? 'Connect' : profile?.profile.handleName}&nbsp;
      {profile === undefined ? (
        ''
      ) : (
        <Avatar shape="square" src={profile?.profile.avatarURL} />
      )}
    </button>
  );
}

export default Connect;
