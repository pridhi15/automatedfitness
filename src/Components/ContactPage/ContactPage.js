import React from "react";
import classes from './ContactPage.module.css'
import ContactForm from "./ContactForm";
import ContactData from "./ContactData";

const ContactPage = () => {
    return (
        <div className={classes.main_contact}>
            <ContactForm />
            <ContactData />
        </div>
    )
};

export default ContactPage;