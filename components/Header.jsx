import React from 'react';
import { useRef } from 'react';
import styles from "./../styles/Home.module.scss";
import Image from 'next/image';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {

  return (
    // Header 
    <section className={styles.header} id="header">
    <div className={styles.headerWrapper}>
      <div className={styles.heading}>
        <span className={styles.heading1}>Be the you</span>
        <span className={styles.heading2}>You want to be</span>
      </div>
      <h4 className={styles.subheading}>
        Live your best life by achieving your fitness goal
      </h4>
      <button className={styles.headerBtn}>
        Get Started
        <ArrowForwardIcon className={styles.headerArrowIcon} sx={{ strokeWidth: 300 }}  />
      </button>
      <div className={styles.headerBottom}>
        <div className={styles.headerImgWrapper}><Image src="/img/home-img.png" className={styles.headerImg} width="1219" height="1055" alt="" /></div>
        {/* <Image src="/../public/img/home-img.png" className={styles.headerImg} width="1219px" height="1055px" alt="" /> */}
        <div className={styles.headerBg}> </div>
      </div>
    </div>
  </section>
  )
}

export default Header