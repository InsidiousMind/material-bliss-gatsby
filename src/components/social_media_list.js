import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';
import _ from 'lodash';

const iconStyles = {
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
  }
};

const renderIcons = (social) => {
  const result = [];
  _.forEach(social, (value, key) => {
    result.push(
      <IconButton
        iconClassName={`zmdi zmdi-${key}`}
        style={iconStyles.linkStyle}
        iconStyle={iconStyles.icon}
        tooltip={key}
        tooltipPosition="top-right"
        href={value}
        key={key}
      />
    );
  });
  return result.map(element => { return element; });
}




export const SocialMediaList = ({social, style}) => {
  return (
    <span style={style} className="social-media-list">
      {renderIcons(social)}
    </span>
  );
}
