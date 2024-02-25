import React from "react";
import classes from './ContactHeader.module.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faYoutube,faInstagram  } from '@fortawesome/free-brands-svg-icons';


const ContactHeader = () => {
    return (
        <nav className={classes.navComponent}>
            <div className={classes.inner}>
            <FontAwesomeIcon className={classes.navIcon} icon={faEnvelope} size="1x" />
            <a className={classes.navElement}> nayankumar200222@gmail.com </a>
            <FontAwesomeIcon className={classes.navIcon} icon={faMobileAlt} size="1x" />
            <a className={classes.navElement}> 8982713015 </a>
            <span className={classes.Icon_container}>
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faFacebookF} className={classes.navIcon} size="1x" />
                </a>
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faInstagram} className={classes.navIcon} size="1x" />
                </a>
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faYoutube} className={classes.navIcon} size="1x" />
                </a>
                <a className={classes.Icons_}>
                <FontAwesomeIcon icon={faTwitter} className={classes.navIcon} size="1x" />
                </a>
            </span>
            </div>
        </nav>
    )
};

export default ContactHeader;