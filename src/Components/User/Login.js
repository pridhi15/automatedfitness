import React, {useState} from "react";
import classes from './Login.module.css';
import { Link } from "react-router-dom";

function Login(props) {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        console.log("Username:", username);
        console.log("Password:", password);

        fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data, "user login");
            setUsername('');
            setPassword('');
            if(data.status === "ok"){
                console.log("Login successful !")
                props.setUsername(data.data.username);
                props.setLoggedIn(1);
                console.log(props.loggedIn);
            }else alert("something went wrong !");
        }).catch(err => {
            console.log(err);
            setUsername('');
            setPassword('');
        })
    }

    const hrstyle = {
        backgroundColor: '#40B555',
        height: '3px',
        border: 'none',
        width: '50%',
    };

    return (
        <div>
            <div className={classes.heading}>Login Page</div>
            <hr style={hrstyle}></hr>
            <form onSubmit={handleSubmit} method="POST">
            <div className={classes.field}>
                <div className={classes.name}><label>Username : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="username..." value={username} name="username" type="text" onChange={handleUsernameChange} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Password : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="password..." value={password} name="password" type="password" onChange={handlePasswordChange} autoComplete="off"/>
                </div>
            </div>
            <br />
            <button className={classes.signIn} type="submit">Sign In</button>
            <p className={classes.anotheroption}><span className={classes.content}>Don't have an account ? </span><Link to='/Signup'><button className={classes.login}>Sign up</button></Link></p>
            </form>
        </div>
    )
}


export default Login;

