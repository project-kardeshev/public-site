import Arweave from 'arweave';

import { THEME_TYPES } from './constants';

// for tailwind css, need the change the root
export const applyThemePreference = (theme: string) => {
  const { DARK, LIGHT } = THEME_TYPES;
  const root = window.document.documentElement;
  const isDark = theme === DARK;
  root.classList.remove(isDark ? LIGHT : DARK);
  root.classList.add(theme);
};

export function shortTransactionId(id: string) {
  return id.slice(0, 4) + '...' + id.slice(-4);
}

const ARWEAVE_ID_REGEX = new RegExp('^[a-zA-Z0-9_-]{43}$');
const ARWEAVE_ID_REGEX_PARTIAL = new RegExp('^[a-zA-Z0-9_-]{0,43}$');

export function validateArweaveId(id: string) {
  return ARWEAVE_ID_REGEX.test(id);
}

export function validateArweaveIdPartial(id: string) {
  return ARWEAVE_ID_REGEX_PARTIAL.test(id);
}

export function getTotalVotes(p: {
  [x: string]: { yay: number; nay: number };
}) {
  const yay = Object.values(p).reduce((acc, val) => acc + val.yay, 0);
  const nay = Object.values(p).reduce((acc, val) => acc + val.nay, 0);
  return { yay, nay };
}

export function estimateDeadlineDate(
  deadline: number,
  currentBlockHeight: number,
): number {
  const remainingBlocks = deadline - currentBlockHeight;
  const msRemaining = remainingBlocks * 120000;

  return Date.now() + msRemaining;
}

export const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
});
