import React from "react";
import classes from './ContactData.module.css'

const ContactData = () => {
    return (
        <div className={classes.main_contactdata}>
            <div className={classes.contactdata}>
                <div className={classes.datacontainer}>
                <p className={classes.dataheading}>Phone Number  </p>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>India :</span><p className={classes.datadetails}> +91 8982713015 </p></div>
                </div>
                <div className={classes.datacontainer}>
                <p className={classes.dataheading}>Email</p>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>Personel : </span><p className={classes.datadetails}>nayankumar200222@gmail.com</p></div>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>Support :  </span><p className={classes.datadetails}>support@fitnessadda.com</p></div>
                </div>
                <div className={classes.datacontainer}>
                <p className={classes.dataheading}>Website Links  </p>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>Instagram :</span><p className={classes.datadetails}> www.instagram.com </p></div>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>Facebook :</span><p className={classes.datadetails}> www.facebook.com </p></div>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>Youtube :</span><p className={classes.datadetails}> www.youtube.com </p></div>
                <div className={classes.innercontainer}><span className={classes.datasubheading}>Twitter :</span><p className={classes.datadetails}> www.twitter.com </p></div>
                </div>
                <div className={classes.datacontainer}>
                <p className={classes.dataheading}>Mailing Address </p>
                <p className={classes.addressinfo}>Fitness Adda Enterprises</p>
                <p className={classes.datadetails}>P.O. Box 13522</p>
                <p className={classes.datadetails}>Armagh Mail Centre</p>
                <p className={classes.datadetails}>Christchurch 8141, New Zealand</p>
                </div>
                <div className={classes.datacontainer}> 
                <p className={classes.dataheading}>Physical Address</p>
                <p className={classes.addressinfo}>fitness Adda Enterprises</p>
                <p className={classes.datadetails}>EPIC Sanctuary</p>
                <p className={classes.datadetails}>78-106 Manchester Street</p>
                <p className={classes.datadetails}>Christchurch 8011, New Zealand</p>
                </div>
            </div>
        </div>
    )
};

export default ContactData;