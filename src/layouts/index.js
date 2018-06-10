import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './main.scss'
import 'typeface-roboto'
import {teal, green, blueGrey, grey, cyan} from '@material-ui/core/colors/';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import Header from '../components/header';
import Footer from '../components/footer';


const darkMuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary1Color: blueGrey[800],
    primary2Color: green[900],
    primary3Color: teal[900],
    accent1Color: green[500],
    accent2Color: teal[500],
    accent3Color: cyan[500],
    textColor: grey[50],
    alternateTextColor: grey[50],
  },
  appBar: {
    height: 100
  },
  toggle: {
    thumbDisabledColor: green[900],
    trackOffColor: blueGrey[800],
    trackOnColor: green[900],
    trackDisabledColor: green[800],
    thumbOnColor: green[900]
  }
});

const lightMuiTheme = createMuiTheme({
  pallete: {
    type: 'light',
    primary1Color: teal[500],
    primary2Color: grey[300],
    primary3Color: cyan[500],
    accent1Color: blueGrey[800],
    accent2Color: green[900],
    accent3Color: teal[900],
  },
  appBar: {
    height: 100,
    color: teal[500],
  },
  toggle: {
    thumbDisabledColor: green[900],
    trackOffColor: blueGrey[800],
    trackOnColor: green[900],
    trackDisabledColor: green[800],
    thumbOnColor: green[900],
  },
  paper: {
    backgroundColor: grey[300]
  },
  drawer: {
    color: grey[300],
  },
  chip: {
    backgroundColor: grey[400],
  },
  raisedButton: {
    secondaryColor: cyan[500]
  }
});

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dark: true,
      data: props.data,
    };
  }
  
  shouldComponentUpdate(nextState) {
    if (this.state.dark !== nextState.dark) {
      return true;
    }
  }

  getTheme = () => {
    if (this.state.dark) {
      return darkMuiTheme;
    }
    return lightMuiTheme;
  }

  handleThemeToggle = () => {
    this.setState({ dark: !this.state.dark });
  }

  renderChildren = () => Children.map(this.props.children, 
    (child) => cloneElement(child, [{
      themeState: this.state.dark
    }]));

  render() {
    return (

      <div>

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Helmet 
          title={this.state.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <MuiThemeProvider theme={this.getTheme()}>
          <div>
            <Header 
              location={this.props.location} 
              config={this.state.data.site.siteMetadata} 
              handleThemeToggle={this.handleThemeToggle}
              themeDark={this.state.dark}
            />
              {this.renderChildren()}
            <Footer themeState={this.state.dark} />
          </div>
        </MuiThemeProvider>

      </div>
    );
  }
}


export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        name
        menu_right_subtitle
        logo
        email
        url
      }
    }
  }
`
