import React, { Component } from 'react';
import { instanceOf } from 'prop-types';instanceOf
import { withCookies, Cookies } from 'react-cookie';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toggle from '@material-ui/core/Switch';
import green from '@material-ui/core/colors/green';
import Link from 'gatsby-link';
import SocialMediaList from './social_media_list';
import Paper from '@material-ui/core/Paper';


const styles = {
    toggle: {
        marginBottom: 5,
        width: 'auto',
        height: 'auto',
        float: 'left',
    },
    input: {
        width: '43%',
    },
    label: {
        width: 'calc(100% - 256)',
    },
    paper: {
        float: 'right',
        position: 'relative',
        marginRight: 10,
        left: 10,
    },
    socialDark: {
        fill: "#000",
    },
    socialLight: {
        fill: "#fff",
    }
};

class RightBar extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo,
            url: props.url,
            handleThemeSwitch: props.handleThemeSwitch,
            siteInfo: props.siteInfo,
            classes: props.classes,
            checked: true,
            // checked: props.cookies.get("checked") || true,
            onChange: props.onChange,
            cookies: props.cookies
        };
    }

    componentDidMount() {
        let cookie = this.state.cookies.get("checked");
        if (typeof cookie !== 'undefined' && cookie === 'false') {
            this.state.handleThemeSwitch();
            this.setState({checked: cookie === 'true'});
            this.state.onChange();
        }
    }

    handleChange() {
        this.state.handleThemeSwitch();
        this.setState({checked: !this.state.checked}, () => {
            this.state.cookies.set("checked", this.state.checked, { path: "/" });
            console.log("CHECKED: ", this.state.checked);
        });
        this.state.onChange();
    }

    render() {
        return (
            <div>
                <div className={this.state.classes.toggle}>
                    <Toggle
                        checked={this.state.checked}
                        onChange={this.handleChange.bind(this)}
                        color='secondary'
                    />
                    <SocialMediaList social={this.state.siteInfo.social} checked={this.state.checked} />
                </div>
            </div>
        );
    }
}

let stylesComp =  withStyles(styles)(RightBar);

export default withCookies(stylesComp);
