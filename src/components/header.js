import React, {Component} from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './menu';
import RightBar from './right_menu_bar';
import Link from 'gatsby-link'
import Typed from 'react-typed';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    flex: {
        flex: .8,
        fontSize: '2.0em',
    },
    typedDark: {
        color: '#0D850D'
    },
    typedLight: {
        color: '#FFFFFF'
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            siteInfo: props.siteInfo,
            handleThemeToggle: props.handleThemeToggle,
            handleMenuToggle: props.handleMenuToggle,
            classes: props.classes,
            themeDark: props.themeDark,
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
    onThemeChange() {
        this.setState({themeDark: !this.state.themeDark})
    }
    render() {
        console.log("THEME DARK: ", this.state.themeDark);
        return (
            <div className={this.state.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            aria-label="Menu"
                            onClick={this.handleToggle}
                            className={this.state.classes.menuButton}
                        >
                            <MenuIcon open={this.state.open}/>
                        </IconButton>
                        <Typography className={this.state.classes.flex}>
                            <Typed
                                strings={['Code.Liquid_Think']}
                                typeSpeed={150}
                                loop
                                backDelay={3000}
                                backSpeed={100}
                                className={classNames(this.state.classes.typedDark, {
                                    [this.state.classes.typedLight]: !this.state.themeDark
                                })}
                            />
                        </Typography>
                        <RightBar
                            siteInfo={this.state.siteInfo}
                            handleThemeSwitch={this.state.handleThemeToggle}
                            className={this.state.classes.rightBar}
                            onChange={this.onThemeChange.bind(this)}
                        />
                    </Toolbar>
                </AppBar>
                <Menu
                    open={this.state.open}
                    handleToggle={this.handleToggle}
                    siteInfo={this.state.siteInfo}
                    location={this.state.location}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Header);
