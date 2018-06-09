import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';

import MenuItem from '@material-ui/core/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, cardText } from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { SocialMediaList } from './social_media_list';


const menuItems = { Home: '/', About: '/about/', Projects: '/projects/'};

const styles = {
  spanSocial: {
    float: ' left',
    paddingLeft: '25%',
    paddingTop: 20,
  }
};

const getMenuItem = (name, path, url) => {
  return (
    <Link to={url}>
      <MenuItem>{name}</MenuItem>
    </Link>
  );
}


const renderMenuItems = (url) => {
  const result = [];
  _.forEach(menuItems, (value, key) => {
    result.push(getMenuItem(key, value, url));
  });
  return result.map((item) => item);
};

export const MenuItems = (props) => (
  <div>
    {renderMenuItems(props.config.url)}
    <Card>
      <CardHeader
        title={props.config.name}
        subtitle={props.config.menu_right_subtitle}
        avatar={props.config.avatar}
      />
      <CardTitle title="About" />
      <CardText>
        {props.config.description}
      </CardText>
      <CardActions>
        {getLink(
          <Button variant="contained" label="More About Me" primary />,
          '',
          props.config.url,
          '/about/'
        )}
      </CardActions>
    </Card>
    <SocialMediaList style={styles.spanSocial} social={props.config.social} />
  </div>
)
