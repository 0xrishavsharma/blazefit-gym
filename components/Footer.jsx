import React, { useEffect, useRef } from 'react'
import styles from "./../styles/Home.module.scss";
import Link from 'next/link';


import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// MUI Social Icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// EmailJs Import
import emailjs from '@emailjs/browser';


import Header from '../components/Header';




const Footer = () => {

    // Scroll to top
    if (typeof window !== "undefined") {
        let scrollUp = document.querySelector("#scrollUp");
        scrollUp.addEventListener("click", () => {
            window.scrollTo(0, 0);
        })
    }
   

    // EmailJS
    const newsletterRef = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        let newsletterError = document.querySelector("#newsletterError");
        let newsletterInput = document.querySelector("#newsletterInput");
        let submitBtn = document.querySelector("#submitBtn")
        if (newsletterInput.value === "") {
            newsletterError.innerText = "Please enter a valid email address";
            newsletterError.style.color = "red";
            newsletterError.style.fontSize = "14px";
            newsletterError.style.marginTop = "0.8rem";
            newsletterError.style.fontSize = "14px";
            newsletterInput.style.border = "1px solid red"
            submitBtn.style.marginTop = "1.2rem"
            setTimeout((e) => {
                newsletterError.innerText = "";
                newsletterInput.style.border = "1px solid var(--primary-color-lighter)";
            }, 4000);
        }
        else {
            emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, newsletterRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    console.log("success")
                    console.log(result.text);
                    newsletterError.style.fontSize = "14px";
                    newsletterError.style.marginTop = "0.8rem";
                    newsletterError.style.fontSize = "14px";
                    newsletterError.innerText = "Successfully subscribed to the Newsletter 🙂";
                    newsletterError.style.color = "var(--primary-color)";
                    submitBtn.style.marginTop = "1.2rem"
                    setTimeout(() => {
                        newsletterError.innerText = "";
                        newsletterInput.value = " "
                    }, 7000);

                }, (error) => {
                    alert("OOPS, something went wrong!", error)
                    console.log(error.text);
                }
                );
        }
    }


    return (
        //Footer
        <section className={[styles.footer, styles.section].join(" ")} id="footer" >
            <div className={styles.footerWrapper}>
                <div className={styles.footerLogo}>
                    <span className={styles.footerLogo1}>Blaze</span>
                    <span className={styles.footerLogo2}>fit</span>
                </div>
                <div className={styles.footerNewsletter}>
                    <h5>Get weekly dose of motivation by subscribing to our Free newsletter</h5>
                    <form ref={newsletterRef}>
                        <input type="email" id="newsletterInput" name="user_email" pattern="[a-zA-Z0-9._+-]+@[a-zA-Z0-9 -]+\.[a-zA-Z]{2,}" placeholder='Your email' />
                        <p className={styles.newsletterError} id="newsletterError" style={{ margin: "0", transition: "0.3s" }}></p>
                        <button onClick={sendEmail} type='submit' className="submitBtn" id="submitBtn">Subscribe</button>
                    </form>
                </div>
                <div className={styles.footerNavLinks}>
                    <div className={styles.footerServicesLinks}>
                        <h5>Services</h5>
                        <div className={styles.footerCompanyLinksWrapper}>
                            <a href=""><li>Muscle Strength</li></a>
                            <a href=""><li>Weight Management</li></a>
                            <a href=""><li>Cardio Training</li></a>
                        </div>

                    </div>
                    <div className={styles.footerPricingLinks}>
                        <h5>Pricing</h5>
                        <div className={styles.footerCompanyLinksWrapper}>
                            <a href=""><li>Basic</li></a>
                            <a href=""><li>Gold</li></a>
                            <a href=""><li>Premium</li></a>
                        </div>
                    </div>
                    <div className={styles.footerCompanyLinks}>
                        <h5>About Us</h5>
                        <div className={styles.footerCompanyLinksWrapper}>
                            <a href=""><li>Contact Us</li></a>
                            <a href=""><li>Careers</li></a>
                            <a href=""><li>Partners</li></a>
                        </div>
                    </div>
                </div>
                <div className={[styles.copyrightSocial, styles.section].join(" ")}>
                    <div className={styles.footerSocialLinks}>
                       <Link href="" ><a href="https://www.facebook.com"><FacebookRoundedIcon className={styles.socialLinksIcon} /></a></Link>
                        <Link href="" ><a href="https://www.instagram.com"><InstagramIcon className={styles.socialLinksIcon} /></a></Link>
                        <Link href="" ><a href="https://www.twitter.com"><TwitterIcon className={styles.socialLinksIcon} /></a></Link>
                        <Link href="https://www.linkedin.com"><a ><LinkedInIcon className={styles.socialLinksIcon} /></a></Link>
                    </div>
                    <div className={[styles.copyright].join(" ")}>
                        &#169; copyright 2022, Rishav Sharma
                    </div>
                </div>
            </div>
            {/* Scroll up button */}
            <Link href="/">
                <a className={styles.scrollUp} id="scrollUp">
                    <ArrowUpwardIcon className={styles.scrollUpIcon} />
                </a>
            </Link>
        </section>
    )
}

export default Footer