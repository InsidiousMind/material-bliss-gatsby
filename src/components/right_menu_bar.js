import React, { Component } from 'react';
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

class RightBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.logo,
      url: props.url,
      handleThemeSwitch: props.handleThemeSwitch,
      social: props.social,
      classes: props.classes,
      checked: true,
    };
  }
 
  render() {
    return (
      <div>
        <div className={this.state.classes.toggle}>
          <Toggle
            checked={this.state.checked}
            onChange={
              () => {
                this.state.handleThemeSwitch();
                this.setState({checked:!this.state.checked});
              }
            }
            color='secondary'
          />
          <SocialMediaList social={this.state.social} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RightBar);


