import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
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
//

const styles = {
  menuBar: {
    position: 'relative',
    float: 'left',
    width: '20em',
  },
  menuIcon: {
    marginLeft: -12
  }
}
const Menu = ({config, open, handleToggle, classes}) => {
  return (
    <Drawer
      open={open}
      onClose={handleToggle}
      className="menu-overflow"
    >
      <AppBar position='static' className={classes.menuBar} >
        <Toolbar>
          <IconButton 
            color="inherit" 
            aria-label="Menu"
            onClick={handleToggle}
            className={classes.menuIcon}
          >
            <MenuIcon open={open} />
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

export default withStyles(styles)(Menu);
