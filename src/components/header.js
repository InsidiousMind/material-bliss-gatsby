import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Menu from './menu';
import RightBar from './right_menu_bar';
import Link from 'gatsby-link'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: true,
      config: props.config,
      handleThemeToggle: props.handleThemeToggle,
      handleMenuToggle: props.handleMenuToggle,
      classes: props.classes,
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
        <AppBar position="fixed" color="default">
          <Toolbar>
            <IconButton 
              color="inherit"
              aria-label="Menu" 
              onClick={this.handleToggle}
            >
              <MenuIcon open={this.state.open}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu open={this.state.open} handleToggle={this.handleToggle} config={this.state.config} location={this.state.location} />
      </div>
    );
  }
}

export default withStyles(styles)(Header);
