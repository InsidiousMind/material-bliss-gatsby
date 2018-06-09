import React, { Component } from 'react';

import {withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItems from './menu_items';

//{/*      className="menu-overflow"*/ }
//      {/*containerClassName="menu-overflow"*/}
//

const Menu = ({config, open, handleToggle}) => {
  return (
    <Drawer
      open={open}
      onClose={handleToggle}
    >
      <AppBar position='fixed' color='default' >
        <Toolbar>
          <IconButton 
            color="inherit" 
            aria-label="Menu"
            onClick={handleToggle}
            className="menu-overflow"
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuItems config={config} />
    </Drawer>
  );
}

export default Menu;
