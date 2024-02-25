import React from "react";
import classes from './ContactForm.module.css'
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

const ContactForm = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [mobilenumber, setMobileNumber] = useState("");
    let [query, setQuery] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleMobilePhoneChange = (event) => {
        setMobileNumber(event.target.value);
    }
    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        fetch("http://localhost:5000/contactpage", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                // "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                mobilenumber: mobilenumber,
                query: query,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data => {
                console.log(data, "query registered !");
                if(data.status == "saved") {
                    alert('Query Saved !');
                }else{
                    alert('Something went wrong !');
                }
            })
        }).catch(err => {
            console.log(err);
        })
        setUsername("");
        setEmail("");
        setMobileNumber("");
        setQuery("");

    }

    return (
        <div className={classes.main_contactform}>
            <div className={classes.contactform}>
            <p className={classes.formheading}>We'd love to hear from you</p>
            <p className={classes.formsubheading}>We welcome any questions or feedback. Please complete this form and we'll be in contact soon.</p>
            <div className={classes.heading}>
            <form onSubmit={handleSubmit} method="POST">
            <div className={classes.field}>
                <div className={classes.name}><label>Your name </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="Name" value={username} name="username" type="text" onChange={handleUsernameChange} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Your email </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="Email" value={email} name="email" type="email" onChange={handleEmailChange} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Phone </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="Phone" value={mobilenumber} name="mobilenumber" type="text" onChange={handleMobilePhoneChange} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Enquiry </label></div>
                <div className={classes.enter}>
                    <input className={classes.input} value={query} name="query" type="textbox" onChange={handleQueryChange} autoComplete="off"/>
                </div>
            </div>  
            <button className={classes.signIn}>Submit</button>
            </form>
            </div>
            </div>
        </div>
    )
};

export default ContactForm;