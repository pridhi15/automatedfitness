import React from "react";
import classes from './ProfilePage.module.css';
import user from '../../assets/user.png';
import { useState } from "react";

const ProfilePage = (props) => {

    const [username, setUsername] = useState(props.username);
    const [email, setEmail] = useState("support@fitnessadda.com");
    const [city, setCity] = useState("kwiskdjfs");
    const [country, setCountry] = useState("kjiuwfsdf");
    const [address, setAddress] = useState("ksfniuwfsfsfskdfskjfsdfsfdsfsdfsfsdf");
    const [mobilenumber, setMobileNumber] = useState("29834293424");

    const handleSubmit = (event) => {
        console.log("inside the profile");
        fetch("http://localhost:5000/get-user", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                username: username
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            setEmail(data.email);
            setCity(data.city);
            setCountry(data.country);
            setAddress(data.address);
            setMobileNumber(data.mobilenumber);
        }).catch(err => {
            console.log(err);
        })

    }
    return (
        <div className={classes.profilepage}>
            <div className={classes.profileheader}>
                <div className={classes.profilephoto}><img src={user} alt="User photo not found" className={classes.image} /></div>
                <div className={classes.username}><h1>Hello, {props.username}</h1></div>
            </div>
            <div className={classes.accessdetails}>
                <form onSubmit={handleSubmit} method="POST"> 
                    {/* <input type="text" name="username" disabled className={classes.inputfield}/> */}
                    <button className={classes.getdetails} type="submit"> Click To See User Details </button>
                </form>
            </div>
            <div className={classes.userdetails}>
                <div className={classes.firstDetails}>
                    <div className={classes.singleDetails}><span className={classes.rowheading}>Name : </span><p className={classes.rowvalue}>{username}</p></div>
                    <div className={classes.singleDetails}><span className={classes.rowheading}>Email : </span><p className={classes.rowvalue}>{email}</p></div>
                    <div className={classes.singleDetails}><span className={classes.rowheading}>Phone Number : </span><p className={classes.rowvalue}>{mobilenumber}</p></div>
                </div>
                <div className={classes.secondDetails}>
                    <div className={classes.singleDetails}><span className={classes.rowheading}>City : </span><p className={classes.rowvalue}>{city}</p></div>
                    <div className={classes.singleDetails}><span className={classes.rowheading}>Country : </span><p className={classes.rowvalue}>{country}</p></div>
                    <div className={classes.singleDetails}><span className={classes.rowheading}>Address : </span><p className={classes.rowvalue}>{address}</p></div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;