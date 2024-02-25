import React from "react";
import classes from './BMIContent.module.css';
import BMI from '../../assets/BMI.jpg';

const BMIContent = () => {
    return (
        <div className={classes.bmicontent}>
            <div className={classes.bmiheading}><p className={classes.headingbmi}>What is BMI ?</p></div>
            <div className={classes.desc}><p className={classes.bmidesc}>Body Mass Index (BMI) is a person’s weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.</p>
            </div>
            <div className={classes.bmiimg}><img src={BMI} alt="BMI image" className={classes.bmiimage}/></div>
        </div>
    )
};

export default BMIContent;