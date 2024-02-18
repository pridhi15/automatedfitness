import React, {useState} from "react";
import classes from './SignUp.module.css';

function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [City, setEnteredCity] = useState("");
    const [Country, setEnteredCountry] = useState("");
    const [address, setAddress] = useState("");
    const [mobilenumber, setMobileNumber] = useState("");

    const handlePhoneNumberChange = (event) => {
        setMobileNumber(event.target.value);
      }
    
    
      const handleCountryChange = (event) => {
        setEnteredCountry(event.target.value);
    };
      const handleCityChange = (event) => {
        setEnteredCity(event.target.value);
    };
    
      const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleAddressChange =(event) => {
        setAddress(event.target.value);
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        // console.log(username);
        if(password === confirmPassword) {
          console.log("yes");
          fetch("http://localhost:5000/", {
            method: "POST",
            // crossDomain:true,
            headers: {
              "Content-Type":"application/json",
              Accept:"application/json",
              // "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({username: username, email:email, password:password, phonenumber: mobilenumber, address: address, city:City, country:Country}),
          }).then(res => res.json())
          .then(data => {
            console.log(data, "user registration");
            if(data.status == "saved"){
              alert("Registration successful");
            }else{
              alert("Something went wrong !!");
            }
          }).catch(err => {
            console.log(err);
          })
        }else{
          console.log("password doesnot match !!")
        }

        setConfirmPassword('');
        setEmail('');
        setPassword('');
        setUsername('');
        setEnteredCity('');
        setEnteredCountry('');
        setMobileNumber('');
        setAddress('');
      }

      const hrstyle = {
        backgroundColor: '#40B555',
        height: '3px',
        border: 'none',
        width: '50%',
    };

    return (
        <div> 
            <div className={classes.heading}>SignUp Page</div>
            <hr style={hrstyle}></hr>
            <form onSubmit={handleSubmit}>
                <div className={classes.field}>
                    <div className={classes.name}><label>Username : </label></div>
                    <div className={classes.enter}><input className={classes.inp} placeholder="username..." name="username" type="text" onChange={handleUsernameChange}/></div>
                </div>
                <div className={classes.field}>
                    <div className={classes.name}><label>Email : </label></div>
                    <div className={classes.enter}><input className={classes.inp} placeholder="email..." name="email" type="email" onChange={handleEmailChange}/></div>
                </div>
                <div className={classes.field}>
                    <div className={classes.name}><label>Password : </label></div>
                    <div className={classes.enter}><input className={classes.inp} placeholder="password..." name="password" type="password" onChange={handlePasswordChange}/></div>
                </div>

                <div className={classes.field}>
                    <div className={classes.name}><label>Confirm Password : </label></div>
                    <div className={classes.enter}><input className={classes.inp} placeholder="confirm password..." name="confirmpassword" type="password" onChange={handleConfirmPasswordChange}/></div>
                </div>
                <div className={classes.field}>
                    <div className={classes.name}><label>City : </label></div>
                    <div className={classes.enter}><input className={classes.inp} placeholder="city..." name="city" type="text" onChange={handleCityChange}/></div>
                </div>
                <div className={classes.field}>
                    <div className={classes.name}><label>Country : </label></div>
                    <div className={classes.enter}><input className={classes.inp} placeholder="country..." name="country" type="text" onChange={handleCountryChange}/></div>
                </div>

                <div className={classes.field}> 
                <div className={classes.name}><label>Street Address : </label></div>
                <div className={classes.enter}> <input  className={classes.inp}  placeholder='enter street address...'
                        name="address"
                        type="text"
                        onChange={handleAddressChange} />
                </div>
                </div>

                <div className={classes.field}>
                <div className={classes.name}><label>Mobile Number : </label></div>
                <div className={classes.enter}> <input  className={classes.inp}  placeholder='Phone number...'
                        name="mobilenumber"
                        type="text"
                        onChange={handlePhoneNumberChange} />
                </div>
                </div>

                <button className={classes.get_started}>Sign Up</button>

            </form>
        </div>
    )
}

export default SignUp;