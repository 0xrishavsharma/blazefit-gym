import React from 'react';
import Image from 'next/image';
import styles from "./../styles/Home.module.scss";

// Logos
import logo1 from "../public/img/logo1.png";
import logo2 from "../public/img/logo2.png";
import logo3 from "../public/img/logo3.png";
import logo4 from "../public/img/logo4.png";

const CompanyLogos = () => {
  return (
    // Company Logos 
    <section className={[styles.logos, styles.section].join(" ")} id="logos">
    <div className={styles.logosWrapper}>
      <Image src={logo1} className={styles.logoImg} width="100" height="30" layout={'fixed'} alt="logoImage" />
      <Image src={logo2} className={styles.logoImg} width="110" height="35" layout={'fixed'} alt="logoImage" />
      <Image src={logo3} className={styles.logoImg} width="120" height="35" layout={'fixed'} alt="logoImage" />
      <Image src={logo4} className={styles.logoImg} width="110" height="30" layout={'fixed'} alt="logoImage" />
    </div>
</section>
  )
}

export default CompanyLogos