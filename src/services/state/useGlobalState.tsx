import { THEME_TYPES } from '@src/constants';
import { applyThemePreference } from '@src/utils';
import { ArAccount } from 'arweave-account';
import { create } from 'zustand';

export type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES];

export type GlobalState = {
  theme: ThemeType;
  walletAddress: string;
  profile?: ArAccount;
};

export type GlobalStateActions = {
  setTheme: (theme: ThemeType) => void;
  setWalletAddress: (walletAddress: string) => void;
  setProfile: (profile: ArAccount) => void;
  reset: () => void;
};

export const initialGlobalState: GlobalState = {
  theme: THEME_TYPES.DARK,
  walletAddress: '',
  profile: undefined,
};

export class GlobalStateActionBase implements GlobalStateActions {
  constructor(
    private set: (props: any) => void,
    private initialGlobalState: GlobalState,
  ) {}
  setTheme = (theme: ThemeType) => {
    this.set({ theme });
    applyThemePreference(theme);
  };
  setWalletAddress = (walletAddress: string) => {
    this.set({ walletAddress });
  };
  setProfile = (profile: ArAccount) => {
    this.set({ profile });
  };
  reset = () => {
    this.set({ ...this.initialGlobalState });
  };
}

export interface GlobalStateInterface extends GlobalState, GlobalStateActions {}
export const useGlobalState = create<GlobalStateInterface>()((set: any) => ({
  ...initialGlobalState,
  ...new GlobalStateActionBase(set, initialGlobalState),
}));
