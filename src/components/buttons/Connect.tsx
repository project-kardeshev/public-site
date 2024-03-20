import { errorEmitter, notificationEmitter } from '@src/services/events';
import { useGlobalState } from '@src/services/state/useGlobalState';
import { shortTransactionId } from '@src/utils';
import { Avatar } from 'antd';
import 'arconnect';
// imports arconnect window definitions
import Account from 'arweave-account';
import { startCase } from 'lodash';
import { useEffect } from 'react';

const arweaveAccountOptions = {
  cacheIsActivated: true,
  cacheSize: 100,
  cacheTime: 60,
};

function Connect() {
  const {
    walletAddress,
    setWalletAddress,
    profile,
    setProfile,
    setShowProfileMenu,
  } = useGlobalState();

  useEffect(() => {
    const walletSwitchHandler = (address: string) => {
      setWalletAddress(address);
      new Account(arweaveAccountOptions)
        .get(address)
        .then((account: any) => {
          notificationEmitter.emit(
            'arconnect',
            `Connected. Welcome back, ${startCase(account?.profile.handleName)}!`,
          );
          setProfile(account);
        })
        .catch((error: any) => {
          console.error(error);
          errorEmitter.emit(
            'error',
            `Error fetching profile: ${error.message}`,
          );
        });
    };
    if (window.arweaveWallet) {
      window.arweaveWallet.events.on('walletSwitch', walletSwitchHandler);
      window.arweaveWallet.getActiveAddress().then((address: string) => {
        setWalletAddress(address);
        new Account(arweaveAccountOptions)
          .get(address)
          .then((account: any) => {
            notificationEmitter.emit(
              'arconnect',
              `Connected. Welcome back, ${startCase(account?.profile.handleName)}!`,
            );
            setProfile(account);
          })
          .catch((error: any) => {
            console.error(error);
            errorEmitter.emit(
              'error',
              `Error fetching profile: ${error.message}`,
            );
          });
      });
      return () => {
        window.arweaveWallet.events.off('switch', walletSwitchHandler);
      };
    }
  }, []);

  async function connectArweaveWallet() {
    try {
      if (!window.arweaveWallet) {
        errorEmitter.emit(
          'error',
          new Error(
            'Arweave wallet not found, install the ArConnect extension to connect. ArConnect is available for Chromium and Firefox at arconnect.io',
          ),
        );
      }
      await window.arweaveWallet.connect([
        'ACCESS_ADDRESS',
        'ACCESS_ALL_ADDRESSES',
        'SIGN_TRANSACTION',
        'ACCESS_ARWEAVE_CONFIG',
        'SIGNATURE',
      ]);
      const address = await window.arweaveWallet.getActiveAddress();
      setWalletAddress(address);
      const account = await new Account(arweaveAccountOptions).get(address);
      setProfile(account);
    } catch (error: any) {
      errorEmitter.emit('error', `Error connecting wallet: ${error.message}`);
    }
  }
  return (
    <>
      <button
        onClick={
          walletAddress ? () => setShowProfileMenu(true) : connectArweaveWallet
        }
        className={`rounded bg-control-primary ${walletAddress ? 'pl-2' : 'p-2'} font-bold transition ease-in-out hover:bg-surface-secondary hover:text-highlight`}
      >
        {profile === undefined
          ? 'Connect'
          : profile?.profile.handleName.length
            ? profile.profile.handleName
            : shortTransactionId(walletAddress)}
        &nbsp;
        {profile === undefined ? (
          ''
        ) : (
          <Avatar shape="square" src={profile?.profile.avatarURL} />
        )}
      </button>
    </>
  );
}

export default Connect;
