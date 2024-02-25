import React from "react";
import classes from './Footer.module.css';
import {Link}  from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faYoutube,faInstagram  } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className={classes.footer_main}> 
            <div className={classes.submain}>
                <div className={classes.content}>
                    <h2 className={classes.contentheading}>FITNESS ADDA FEATURES</h2>
                    <Link to='/BMI'><a className={classes.Icons_}>BMI</a></Link><br /><br />
                    <Link to='/Dietplan'><a className={classes.Icons_}>Diet plan</a></Link><br /><br />
                    <Link to='/Heartrate'><a className={classes.Icons_}>Heart rate</a></Link><br /><br />
                    <Link to='/Yoga'><a className={classes.Icons_}>Yoga</a></Link><br /><br />
                </div>
            </div>
            <div className={classes.submain}>
                <div className={classes.content}>
                <h2 className={classes.contentheading}>SUPPORT SYSTEM</h2>
                <a className={classes.Icons_}>Resources</a><br /><br />
                <a className={classes.Icons_}>Support</a><br /><br />
                <a className={classes.Icons_}>Client portal setup</a><br /><br />
                <a className={classes.Icons_}>Systum status</a><br /><br />
                </div>
            </div>
            <div className={classes.submain}>
                <div className={classes.content}>
                <h2 className={classes.contentheading}>WEBSITE LINKS</h2>
                
                <a className={classes.Icons_} > <FontAwesomeIcon className={classes.navIcon} icon={faEnvelope} size="1x"/>   &nbsp; &nbsp; &nbsp;  nayankumar200222@gmail.com </a><br /><br />
                
                <a className={classes.Icons_}>  <FontAwesomeIcon className={classes.navIcon} icon={faMobileAlt} size="1x" />  &nbsp; &nbsp; &nbsp; 8982713015 </a><br /><br />
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faFacebookF} className={classes.navIcon} size="1x" /> &nbsp; &nbsp; &nbsp; www.facebook.com
                </a><br /><br />
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faInstagram} className={classes.navIcon} size="1x" /> &nbsp; &nbsp; &nbsp;www.instagram.com
                </a><br /><br />
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faYoutube} className={classes.navIcon} size="1x" /> &nbsp; &nbsp; &nbsp;www.youtube.com
                </a><br /><br />
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faTwitter} className={classes.navIcon} size="1x" /> &nbsp; &nbsp; &nbsp;www.twitter.com
                </a>

                <h3></h3>
                </div>
            </div>
        </div>
    )
};

export default Footer;