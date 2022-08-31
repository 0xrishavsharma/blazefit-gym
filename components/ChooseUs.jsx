import React from 'react';
import Image from 'next/image';
import styles from "./../styles/Home.module.scss";

const ChooseUs = () => {
  return (
    // Why choose us 
    <section className={[styles.chooseUs, styles.section].join(" ")} id="chooseUs">
    <div className={styles.chooseUsWrapper}>
      <div className={styles.programsHeading}>
        <h4 className={styles.subheading}>Best Reason</h4>
        <h2 className={styles.mainHeading}> <span className={styles.mainHeading1}>Why</span> <span className={styles.mainHeading2}>Choose Us ?</span></h2>
      </div>
      <p className={styles.chooseUsPara}>Having a legacy of 13+ years we are here to make you fit and healthy </p>
      <div className={styles.chooseUsStats}>
        <div className={styles.csStatsCard}>
          <div className={styles.csStatsCardWrapper}>
            <h5>2000<span>+</span></h5>
            <p>Members Worldwide</p>
          </div>
        </div>
        <div className={styles.csStatsCard}>
          <div className={styles.csStatsCardWrapper}>
            <h5>500<span>+</span></h5>
            <p>Certified Trainers</p>
          </div>
        </div>
        <div className={styles.csStatsCard}>
          <div className={styles.csStatsCardWrapper}>
            <h5>20<span>+</span></h5>
            <p>Fitness Programs</p>
          </div>
        </div>
        <div className={styles.csStatsCard}>
          <div className={styles.csStatsCardWrapper}>
            <h5>10<span>+</span></h5>
            <p>Awards</p>
          </div>
        </div>
      </div>
      <div className={styles.chooseUsImg}>
        <div className={styles.chooseUsImgWrapper}><Image src="/img/choose-img.png" className={styles.chooseUsImg} width={400} height={520} alt="chooseUsImage" /></div>
        {/* <div className={styles.chooseUsImgWrapper}></div> */}
        <div className={styles.chooseUsImgBG}></div>
      </div>
    </div>
  </section>

  )
}

export default ChooseUs