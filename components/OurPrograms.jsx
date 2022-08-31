import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import styles from "./../styles/Home.module.scss";

// Logos
import program1 from "../public/img/program1.png"
import program4 from "../public/img/program4.png"
import program3 from "../public/img/program3.png"

const OurPrograms = () => {
    return (
        // Our Programs
        <section className={[styles.programs, styles.section].join(" ")} id="programs">
            <div className={styles.programsWrapper}>
                <div className={styles.programsHeading}>
                    <h4 className={styles.subheading}>Our Programs</h4>
                    <h2 className={styles.mainHeading}> <span className={styles.mainHeading1}>Build your</span> <span className={styles.mainHeading2}>Best Body</span></h2>
                </div>
                <div className={styles.programsCardsContainer}>
                    <div className={[styles.programsCard, styles.programsCard1].join(" ")}>
                        <div className={styles.programsImgContainer}><Image src={program1} width={24} height={24} alt="dumbbell" /></div>
                        <h5>Muscle Strength</h5>
                        <p>Our apex program. Build lean muscle and see visible in just 30 days</p>
                        <ArrowForwardIcon className={styles.programArrowIcon} />
                    </div>
                    <div className={[styles.programsCard, styles.programsCard2].join(" ")}>
                        <div className={styles.programsImgContainer}><Image src={program3} width={24} height={24} alt="dumbbell" /></div>
                        <h5>Weight Management</h5>
                        <p>Tried everything method to gain weight? &nbsp;There is always a missing piece, we will give you that</p>
                        <ArrowForwardIcon className={styles.programArrowIcon} />
                    </div>
                    <div className={styles.programsCard}>
                        <div className={styles.programsImgContainer}><Image src={program4} width={24} height={24} alt="dumbbell" /></div>
                        <h5>Cardio Training</h5>
                        <p>Our certified trainers will help you to build your stamina. Visible results in 14 days.</p>
                        <ArrowForwardIcon className={styles.programArrowIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPrograms