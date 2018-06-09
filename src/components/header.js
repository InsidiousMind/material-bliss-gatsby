import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    marginRight: 20,
  },
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
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
      <div classname={this.state.classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton 
              aria-label="Menu" 
              onClick={this.handleToggle}
              className={this.state.classes.menuButton}
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
