import React from 'react';
import withStyles from '@material-ui/core/styles';
import Toggle from '@material-ui/core/Switch';
import green from '@material-ui/core/colors/green';
import Link from 'gatsby-link';
import SocialMediaList from './social_media_list';


const styles = {
  switch: {
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
  }
};

const RightBar = ({logo, url, handleThemeSwitch, social}) => {
  
  return (
    <div className="right-menu-bar">
      <div>
        <Link to="/">
          <img role="presentation" src={`${url}/${logo}`}/>
        </Link>
      </div>
      <div>
        <Toggle
          checked={true}
          style={styles}
          onChange={handleThemeSwitch}
        />
        <SocialMediaList social={social} />
      </div>
    </div>
  );
}

export default RightBar;


