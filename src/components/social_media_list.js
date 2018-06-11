import React from 'react';
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
  icon: {
    fill: '#2e7d32',
  },
  link: {
    margin: '0 0 -12px -12px',
  }
};

const SocialMediaList = ({social, classes}) => {
  return (
    <span className="social-media-list">
      <a href={social.twitter} className={classes.link}>
        <IconButton aria-label='Twitter'>
          <TwitterIcon className={classes.icon}/>
        </IconButton>
      </a>
      <a href={social.github} className={classes.link}>
        <IconButton aria-label='Github'>
          <GithubIcon className={classes.icon}/>
        </IconButton>
      </a>
      <a href={social.facebook} className={classes.link}>
        <IconButton aria-label='Facebook'>
          <FacebookIcon className={classes.icon}/>
        </IconButton>
      </a>
      <a href={social.googlePlus} className={classes.link}>
        <IconButton aria-label='GooglePlus'>
          <GoogleIcon className={classes.icon}/>
        </IconButton>
      </a>
      <a href={social.feed} className={classes.link}>
        <IconButton aria-label='RSS'>
          <RSSIcon className={classes.icon}/>
        </IconButton>
      </a>
    </span>
  );
}

export default withStyles(styles)(SocialMediaList);
