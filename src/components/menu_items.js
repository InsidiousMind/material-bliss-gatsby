import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SocialMediaList from './social_media_list';


const menu_items = { Home: '/', About: '/about/', Projects: '/projects/', Resume: '/resume/'};

const styles = {
  social: {
    display: 'block',
    margin: 'auto',
    marginLeft: '4.5rem',
  }
};

const getMenuItem = (name, path, url) => {
  return (
    <Link to={path}>
      <MenuItem>{name}</MenuItem>
    </Link>
  );
}


const renderMenuItems = (url) => {
  const result = [];
  _.forEach(menu_items, (value, key) => {
    result.push(getMenuItem(key, value, url));
  });
  return result.map((item) => item);
};

const MenuItems = ({siteInfo, classes, checked}) => (
  <div>
    {renderMenuItems(siteInfo.url)}
    <Card>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {siteInfo.name}
        </Typography>
        <Typography component="h3">
          {siteInfo.menu_right_subtitle}
        </Typography>
        <Typography component="p">
          {siteInfo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/about/' >
          <Button variant='contained'>
            More About Me
          </Button>
        </Link>
      </CardActions>
    </Card>
    <div className={classes.social}>
      <SocialMediaList social={siteInfo.social} checked={checked}/>
    </div>
  </div>
);
export default withStyles(styles)(MenuItems);
