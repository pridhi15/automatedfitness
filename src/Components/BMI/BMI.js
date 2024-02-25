import React from "react";
import classes from './BMI.module.css'
import BMIContent from "./BMIContent";
import BMIForm from "./BMIForm";

const BMI = () => {
    return (
        <div className={classes.bmicontent}>
            <BMIContent />
            <BMIForm />
        </div>
    )
};

export default BMI;