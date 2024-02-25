import React from "react";
import classes from './BMIForm.module.css'
import { useState } from "react";

const BMIForm = () => {
    let [height, setHeight] = useState(0);
    let [weight, setWeight] = useState(0);

    const heightChangeHandler = (event) => {
        setHeight(event.target.value);
    }
    const weightChangeHandler = (event) => {
        setWeight(event.target.value);
    }

    let element = 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inside bmi calculator");
        console.log(event.target.value);
        let h = height/100;
        let w = weight;
        element = (w) / (h*h);
        setHeight(0);
        setWeight(0);
    }

    return (
        <div className={classes.bmiform}>
            <div className={classes.formheading}><h1 className={classes.headingdata}>BMI Calculator</h1></div>
            <div className={classes.bmiForm}>
            <form onSubmit={handleSubmit} method="POST">
            <div className={classes.field}>
                <div className={classes.name}><label>Height in CM : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="Like 150" value={height} name="height" type="number" onChange={heightChangeHandler} autoComplete="off"/>
                </div>
            </div>
            <div className={classes.field}>
                <div className={classes.name}><label>Weight in KG : </label></div>
                <div className={classes.enter}>
                    <input className={classes.inp} placeholder="Like 60" value={weight} name="weight" type="number" onChange={weightChangeHandler} autoComplete="off"/>
                </div>
            </div>  
            <button className={classes.bmi} type="submit">Calculate</button>
            </form>
            </div>
            <div className={classes.resultheading}><h1>Your BMI Result</h1></div>
            <div className={classes.result}>{element}</div>
        </div>
    )
};

export default BMIForm;