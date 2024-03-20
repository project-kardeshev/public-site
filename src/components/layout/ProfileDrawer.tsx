import { useGlobalState } from '@src/services/state/useGlobalState';
import { shortTransactionId } from '@src/utils';
import { Drawer, List } from 'antd';
import Avatar from 'antd/es/avatar/avatar';

function ProfileDrawer() {
  const {
    profile,
    showProfileMenu,
    walletAddress,
    kardBalance,
    credBalance,
    setShowProfileMenu,
    setWalletAddress,
    setProfile,
  } = useGlobalState();

  function disconnect() {
    window.arweaveWallet.disconnect();
    setWalletAddress('');
    setProfile(undefined as any);
    setShowProfileMenu(false);
  }
  const profileData = {
    ['Wallet Address']: walletAddress ?? 0,
    ['$KARD Balance']: kardBalance ?? 0,
    ['$CRED Balance']: credBalance ?? 0,
    ['Blueprints']: 0,
    ['Bounties']: 0,
    ['Degrees']: 0,
  };
  return (
    <>
      <Drawer
        title={
          <div className="flex flex-col items-center justify-center gap-5">
            <Avatar
              src={profile?.profile?.avatarURL}
              shape="square"
              size={120}
            />
            <span>
              {profile?.profile?.handleName.length
                ? profile.profile.handleName
                : shortTransactionId(walletAddress)}
            </span>
          </div>
        }
        placement="right"
        closable={true}
        onClose={() => setShowProfileMenu(false)}
        open={showProfileMenu}
        getContainer={false}
      >
        <div className="flex size-full flex-col justify-between">
          <List>
            {Object.entries(profileData).map(([key, value], index) => {
              return (
                <List.Item key={index}>
                  <List.Item.Meta title={key} description={value} />
                </List.Item>
              );
            })}
          </List>
          <button
            className="w-full rounded-lg border-2 border-error/40 bg-error/10 p-3 text-text-primary hover:border-error/80 hover:text-error"
            onClick={disconnect}
          >
            Log Out
          </button>
        </div>
      </Drawer>
    </>
  );
}

export default ProfileDrawer;
