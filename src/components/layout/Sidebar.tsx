import { Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiCaduceus } from 'react-icons/gi';
import { GiScales } from 'react-icons/gi';
import { MdConstruction } from 'react-icons/md';
import { TbBrandPlanetscale } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

import CreateProposal from '../modals/CreateProposal';
import MintTokens from '../modals/MintTokens';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const KEY_ROUTE_MAP: Record<string, string> = {
  '/bounties': '1',
  '/blueprints': '2',
  '/token-transactions': '3',
  '/dao': '4',
  '/kardeshevians': '5',
};

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState(
    KEY_ROUTE_MAP['/kardeshevians'],
  );

  // modal states
  const [showCreateProposal, setShowCreateProposal] = useState(false);
  const [showMintTokens, setShowMintTokens] = useState(false);

  const items: MenuItem[] = [
    getItem(
      'Bounties',
      '1',
      <Link to="/bounties">
        <GiCaduceus size={20} />
      </Link>,
    ),
    getItem(
      'Blueprints',
      '2',
      <Link to="/blueprints">
        <MdConstruction size={20} />
      </Link>,
    ),
    getItem(
      '$KARD',
      '3',
      <Link to="/token-transactions">
        <TbBrandPlanetscale size={20} />
      </Link>,
    ),
    getItem('DAO', '4', <GiScales size={20} />, [
      getItem(
        '',
        '1.1',
        <Link
          to="/dao"
          className="size-full items-center justify-center rounded p-2 hover:bg-surface-secondary hover:text-highlight"
        >
          View Proposals
        </Link>,
      ),
      getItem(
        '',
        '1.1',
        <button
          className="size-full items-center justify-center rounded p-2 hover:bg-surface-secondary hover:text-highlight"
          onClick={() => setShowCreateProposal(true)}
        >
          Create
        </button>,
      ),
      getItem(
        '',
        '1.1',
        <button
          className="size-full items-center justify-center rounded p-2 hover:bg-surface-secondary hover:text-highlight"
          onClick={() => setShowMintTokens(true)}
        >
          Mint Tokens
        </button>,
      ),
    ]),
    getItem(
      'Kardeshevians',
      '5',
      <Link to="/kardeshevians">
        <FaPeopleGroup size={20} />
      </Link>,
    ),
  ];

  useEffect(() => {
    console.log('path', path);
    setSelectedKey(KEY_ROUTE_MAP[path ?? '/kardeshevians']);
  }, [path]);

  return (
    <div className="flex h-full flex-col">
      <Menu
        className="h-full bg-surface-primary"
        defaultSelectedKeys={['1']}
        selectedKeys={[selectedKey]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
        items={items}
      />
      <CreateProposal
        visible={showCreateProposal}
        setVisibility={(visible: boolean) => setShowCreateProposal(visible)}
      />
      <MintTokens
        visible={showMintTokens}
        setVisibility={(visible: boolean) => setShowMintTokens(visible)}
      />
    </div>
  );
}

export default Sidebar;
