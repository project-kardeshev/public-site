import { Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiCaduceus } from 'react-icons/gi';
import { GiScales } from 'react-icons/gi';
import { MdConstruction } from 'react-icons/md';
import { TbBrandPlanetscale } from 'react-icons/tb';

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
  getItem('Bounties', '1', <GiCaduceus size={20} />),
  getItem('Blueprints', '2', <MdConstruction size={20} />),
  getItem('$KARD', '3', <TbBrandPlanetscale size={20} />),
  getItem('DAO', '4', <GiScales size={20} />),
  getItem('Players', '5', <FaPeopleGroup size={20} />),
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex h-full flex-col">
      <Menu
        className="h-full bg-surface-primary"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
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
