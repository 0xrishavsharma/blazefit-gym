import React from 'react';
import { useRef } from 'react';
import styles from "./../../styles/Home.module.scss";
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const menuRef = useRef();

    let main = window.document.querySelector("#main");
    let navMenu = window.document.querySelector("#navMenu");
    main.addEventListener('click', (e) => {
        if (!menuRef.current.contains(e.target)) {
            event.preventDefault();
            let navMenu = window.document.querySelector("#navMenu");
            console.log(navMenu)
            navMenu.style.right = "-100%";
        }
    })

  return (
    <div className={styles.navMenu} id="navMenu" ref={menuRef}>
        <a href="" onClick={menuClose}><CloseIcon className={styles.closeIcon} /></a>
        <ul className={styles.navMenuList}>
        <a href="" onClick={linkAction}><li className={styles.navItem}>Home</li></a>
        <a href="" onClick={linkAction}><li className={styles.navItem}>Program</li></a>
        <a href="" onClick={linkAction}><li className={styles.navItem}>Choose us</li></a>
        <a href="" onClick={linkAction}><li className={styles.navItem}>Pricing</li></a>
        <a href="" onClick={linkAction}><li className={[styles.navRegistration]}>Register Now</li></a>
        </ul>
    </div>
  )
}

export default Header