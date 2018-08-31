import React from 'react';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from 'mdi-react/FacebookIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import GithubIcon from 'mdi-react/GithubFaceIcon';
import GoogleIcon from 'mdi-react/GooglePlusIcon';
import RSSIcon from 'mdi-react/RssIcon';
import green from '@material-ui/core/colors/green';
import {withStyles} from '@material-ui/core/styles';
import _ from 'lodash';

const styles = {
    icon: {
        marginRight: 10,
        iconHoverColor: green[900],
    },
    hoveredStyle: {
        color: green[900],
    },
    linkStyle: {
        padding: 0,
        width: 30,
    },
    iconDark: {
        fill: '#2e7d32',
    },
    iconLight: {
        fill: "#F50057",
    },
    link: {
        margin: '0 0 -12px -12px',
    }
};

const SocialMediaList = ({social, classes, checked}) => {
    return (
        <span className="social-media-list">
            <a href={social.twitter} className={classes.link}>
                <IconButton aria-label='Twitter'>
                    <TwitterIcon className={classNames(classes.iconDark, {
                            [classes.iconLight]: !checked,
                        })}
                    />
                </IconButton>
            </a>
            <a href={social.github} className={classes.link}>
                <IconButton aria-label='Github'>
                    <GithubIcon className={classNames(classes.iconDark, {
                            [classes.iconLight]: !checked
                    })}
                    />
                </IconButton>
            </a>
            <a href={social.facebook} className={classes.link}>
                <IconButton aria-label='Facebook'>
                    <FacebookIcon className={classNames(classes.iconDark, {
                            [classes.iconLight]: !checked,
                    })}
                    />
                </IconButton>
            </a>
            <a href={social.googlePlus} className={classes.link}>
                <IconButton aria-label='GooglePlus'>
                    <GoogleIcon className={classNames(classes.iconDark, {
                        [classes.iconLight]: !checked,
                    })}/>
                </IconButton>
            </a>
            <a href={social.feed} className={classes.link}>
                <IconButton aria-label='RSS'>
                    <RSSIcon className={classNames(classes.iconDark, {
                            [classes.iconLight]: !checked,
                    })}/>
                </IconButton>
            </a>
        </span>
    );
}

export default withStyles(styles)(SocialMediaList);
