import React, {Component} from 'react';
import classnames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Menu from './menu';
import {RightBar } from './right_menu_bar';
import Link from 'gatsby-link'



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false, 
      width: 1200, 
      height: null,
      config: props.config,
      handleThemeSwitch: props.handleThemeSwitch,
    };
  }
  
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  hideMenuButton = () => {
    if (this.state.open) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon open/>
            </IconButton>
            <RightBar config={this.state.config} handleThemeSwitch={this.state.handleThemeSwitch} />
          </Toolbar>
        </AppBar>
        <Menu open={this.state.open} handleToggle={this.handleToggle} config={this.state.config} location={this.state.location} />
          {<div className={classnames('app-content', { expanded: this.state.open})}> {this.props.children } </div>}
        </div>
    );
  }
}
export default Header;
