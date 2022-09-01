import React from 'react';
import Image from 'next/image';
import styles from "./../styles/Home.module.scss";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// Logos
import pricing1 from "../public/img/pricing1.png"
import pricing2 from "../public/img/pricing2.png"
import pricing3 from "../public/img/pricing3.png"

const Pricing = () => {
  return (
    // Pricing 
    <section className={[styles.pricing, styles.section, styles.container].join(" ")} id="pricing">
      <div className={styles.pricingWrapper}>
        <div className={styles.programsHeading}>
          <h4 className={styles.subheading}>Pricing</h4>
          <h2 className={styles.mainHeading}> <span className={styles.mainHeading1}>Our</span> <span className={styles.mainHeading2}>Best Plans</span></h2>
        </div>
        <div className={styles.pricingCardContainer}>
          <div className={[styles.pricingCard].join(" ")}>
            <div className={styles.pricingImgContainer}><Image src={pricing1} className={styles.pricingImg} width={30} height={30} alt="dumbbell" /></div>
            <h4>Basic Package</h4>
            <h3>$119</h3>
            <div className={[styles.pricingChecklist, styles.pricingChecklist1].join(" ")}>
              <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> 4 days a week</li>
              <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> 1 Sweatshirt</li>
              <li className={[styles.listItem, styles.listItem3].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon3].join(" ")} /> Protein powder</li>
              <li className={[styles.listItem, styles.listItem4].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon4].join(" ")} /> Full Body Stretching</li>
              <li className={[styles.listItem, styles.listItem5].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon5].join(" ")} /> Yoga</li>
            </div>
            <button className={styles.pricingBtn}> <span>Enroll Now</span>  <ArrowForwardIcon className={styles.pricingBtnIcon} /> </button>
          </div>
          <div className={[styles.pricingCard, styles.pricingCardActive].join(" ")}>
            <div className={styles.pricingImgContainer}><Image src={pricing2} className={styles.pricingImg} width={30} height={30} alt="dumbbell" /></div>
            <h4>Gold Package</h4>
            <h3>$219</h3>
            <div className={[styles.pricingChecklist, styles.pricingChecklist2].join(" ")}>
              <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> 4 days a week</li>
              <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> 1 Sweatshirt</li>
              <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon3].join(" ")} /> Protein powder</li>
              <li className={[styles.listItem, styles.listItem4].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon4].join(" ")} /> Full Body Stretching</li>
              <li className={[styles.listItem, styles.listItem5].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon5].join(" ")} /> Yoga</li>
            </div>
            <button className={styles.pricingBtn}> <span>Enroll Now</span>  <ArrowForwardIcon className={styles.pricingBtnIcon} /> </button>
          </div>
          <div className={[styles.pricingCard].join(" ")}>
            <div className={styles.pricingImgContainer}><Image src={pricing3} className={styles.pricingImg} width={30} height={30} alt="dumbbell" /></div>
            <h4>Premium Package</h4>
            <h3>$259</h3>
            <div className={[styles.pricingChecklist, styles.pricingChecklist3].join(" ")}>
              <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> 4 days a week</li>
              <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> 1 Sweatshirt</li>
              <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> Protein powder</li>
              <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> Full Body Stretching</li>
              <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> Yoga</li>
            </div>
            <button className={styles.pricingBtn}> <span>Enroll Now</span>  <ArrowForwardIcon className={styles.pricingBtnIcon} /> </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing