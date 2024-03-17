import { Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiCaduceus } from 'react-icons/gi';
import { GiScales } from 'react-icons/gi';
import { MdConstruction } from 'react-icons/md';
import { TbBrandPlanetscale } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

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
  getItem(
    'DAO',
    '4',
    <Link to="/dao">
      <GiScales size={20} />
    </Link>,
  ),
  getItem(
    'Kardeshevians',
    '5',
    <Link to="/kardeshevians">
      <FaPeopleGroup size={20} />
    </Link>,
  ),
];

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
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState(
    KEY_ROUTE_MAP['/kardeshevians'],
  );

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
        inlineCollapsed={collapsed}
        items={items}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
      />
    </div>
  );
}

export default Sidebar;
