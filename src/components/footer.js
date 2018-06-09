import React from 'react';
import Paper from '@material-ui/core/Paper';
import {SocialMediaList} from './social_media_list';
import SignupForm from './signup_form';


const Footer = ({title, email, social, themeURL}) => {
  const today = new Date();

  return (

  <Paper elevation={6}>
    <footer className="site-footer">
      <div className="wrapper">
        <div className="footer-col-wrapper">
          <div className="footer-col footer-col-1">
            <ul className="contact-list">
              <li>{title}</li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
              <li><p>&copy; Material Bliss Jan2017-{today.getFullYear()}</p></li>
              <li><a href={themeURL}>Material Bliss Theme</a></li>
            </ul>
          </div>
          <div className="footer-col footer-col-2">
            <SocialMediaList social={social}/>
          </div>
          <div className="footer-col footer-col-3">
            <SignupForm />
          </div>
        </div>
      </div>
    </footer>
  </Paper>
  );
}

export default Footer;
