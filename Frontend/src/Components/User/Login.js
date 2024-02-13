import React, {useState} from "react";
import classes from './Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        setUsername('');
        setPassword('');
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
                    <input className={classes.inp} placeholder="username..." name="username" type="text" onChange={handleUsernameChange} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Password : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="password..." name="password" type="password" onChange={handlePasswordChange} autoComplete="off"/>
                </div>
            </div>
            <br />
            <button className={classes.signIn} type="submit">Sign In</button>
            </form>
        </div>
    )
}


export default Login;

