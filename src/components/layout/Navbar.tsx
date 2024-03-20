import { GrDebian } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import Connect from '../buttons/Connect';

function Navbar() {
  return (
    <div
      className="flex h-14 w-full flex-row items-start justify-between bg-surface-primary p-2"
      data-testid="navbar"
    >
      <div className="flex flex-row items-center justify-between px-4">
        <Link
          to="/"
          className="flex w-fit flex-row items-center justify-center font-diabloHeavy text-2xl font-bold text-text-primary transition ease-in-out hover:text-highlight"
        >
          <GrDebian size={35} fill="green" className="hover:animate-spin" />
          &nbsp;&nbsp;Kardeshev
        </Link>
      </div>

      <div className="flex flex-row items-center justify-between gap-10 px-2">
        <Link
          to="/yellow-paper"
          className="cursor-pointer font-bold transition ease-in-out hover:text-highlight"
        >
          Yellow Paper
        </Link>
        <Link
          to="/guide"
          className="cursor-pointer font-bold transition ease-in-out hover:text-highlight"
        >
          Guide
        </Link>
        <Connect />
      </div>
    </div>
  );
}

export default Navbar;
