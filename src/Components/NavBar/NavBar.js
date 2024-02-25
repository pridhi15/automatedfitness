import React from "react";
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


const NavBar = (props) => {

    let element = <div className={classes.login}>
        <Link to='/Login'><button className={classes.NavOptions_button}>Login</button></Link>
        {/* <Link to='/Signup'><button className={classes.NavOptions_button}>Get Started</button></Link> */}
    </div>

    // if(props.loggedIn == 1) {
        element = <div className={classes.logout}>
            <Link to='/Profile'><button className={classes.NavOptions_button}><FaUserCircle className={classes.profileicon}></FaUserCircle> &nbsp;<span className={classes.profileheading}>{props.username}</span></button></Link>
            <button className={classes.NavOptions_button} onClick={props.setLoggedIn(false)}>Logout</button>
        </div>
    // }

    return (

        <header className={classes.nav}>
        <Link to='/' className={classes.headinglink}><h1 className={classes.heading}>FITNESS ADDA</h1></Link>
        <span className={classes.NavOptions}>
            <a className={classes.options}><Link to='/Features'>Features</Link>
            {/* <div class="dropdown">
            <button class="btn">Features</button>
            <div class="dropdown-menu">
                <a><Link to='/BMI'>BMI Calculator</Link></a>
                <a><Link to='/Dietplan'>Diet Plan</Link></a>
                <a><Link to='/Heartrate'>Heart Rate</Link> </a>
                <a><Link to='/Yoga'>Yoga</Link></a>
            </div>
            </div> */}
            </a>
            <a className={classes.options}><Link to="/ContactPage">Contact Us</Link></a>
            <a className={classes.options}><Link to="/Dietician">Dietician</Link></a>
            {element}
        </span>
        </header>
        
        )
    };
    
    export default NavBar;
    // <header className={classes.nav}>
    // <h1 className={classes.logo}>FITNESS ADDA</h1>
    // <span className={classes.NavOptions}>
        // <div class="dropdown">
        // <button class="btn">Features</button>
        // <div class="dropdown-menu">
        //     <a><Link to='/BMI'>BMI Calculator</Link></a>
        //     <a><Link to='/Dietplan'>Diet Plan</Link></a>
        //     <a><Link to='/Heartrate'>Heart Rate</Link> </a>
        //     <a><Link to='/Yoga'>Yoga</Link></a>
        // </div>
        // </div>
    //     <a className={classes.options}><Link to="/Dietician">Dietician</Link></a>
    //     <a className={classes.options}><Link to="/ContactPage">Contact Us</Link></a>
    //     {element}
    // </span>
    // </header>