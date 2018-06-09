import React from 'react';
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
  }
};


const RightBar = ({logo, url, handleThemeSwitch, social, themeDark, classes}) => {
  console.log("THEME DARK");
  console.log(themeDark);
  return (
    <div>
      <div className={classes.toggle}>
        <Toggle
          checked={themeDark}
          onChange={handleThemeSwitch}
        />
        <SocialMediaList social={social} />
      </div>
    </div>
  );
}

export default withStyles(styles)(RightBar);


