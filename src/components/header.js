import React, {Component} from 'react';
import classnames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Menu from './menu';
import RightBar from './right_menu_bar';
import Link from 'gatsby-link'



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: true,
      width: 1200, 
      height: null,
      config: props.config,
      handleThemeToggle: props.handleThemeToggle,
      handleMenuToggle: props.handleMenuToggle,
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
            <IconButton color="inherit" aria-label="Menu" onClick={this.handleToggle}>
              <MenuIcon open={this.state.open}/>
            </IconButton>
            <RightBar 
              config={this.state.config} 
              handleThemeSwitch={this.state.handleThemeToggle} 
            />
          </Toolbar>
        </AppBar>
        <Menu open={this.state.open} handleToggle={this.handleToggle} config={this.state.config} location={this.state.location} />
      </div>
    );
  }
}
export default Header;
