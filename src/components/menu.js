import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';

import { MenuItems } from './menu_items';

const Menu = ({config, open, handleToggle}) => {

  return (
    <Drawer
      docked
      open={open}
      onRequestChange={handleToggle}
      swipeAreaWidth={200}
      className="menu-overflow"
      containerClassName="menu-overflow"
    >
      <AppBar
        title="Menu"
        onLeftIconButtonTouchTap={handleToggle}
      />
      <MenuItems config={config} />
    </Drawer>
  );
}

export default Menu;
