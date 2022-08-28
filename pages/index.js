import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


// Opening and closing Nav menu when clicked on menuOpen and menuClose btn
const menuOpen = async (e) => {
  e.preventDefault();
  let navMenu = document.querySelector("#navMenu");
  navMenu.style.right = "0";
}

const menuClose = (e) => {
  e.preventDefault();
  let navMenu = document.querySelector("#navMenu");
  navMenu.style.right = "-100%";
}

// Closing the menu if use click on any navLink
const linkAction = (e) => {
  e.preventDefault();
  let navMenu = document.querySelector("#navMenu");
  navMenu.style.right = "-100%";
}

// Calculate BMI
let calculatorSubmit = (e) => {
  e.preventDefault();
  if (typeof window != "undefined") {
    let calculatorInput = document.getElementById("#calculatorInput");
    let calculatorInput1 = document.getElementById("#calculatorInput1");
    let calculatorInput2 = document.getElementById("#calculatorInput");
    let calculatorMessage = document.getElementById("#calculatorMessage");
    let inputWrapper1 = document.getElementById("inputWrapper1");
    let inputWrapper2 = document.getElementById("inputWrapper2");
    let heightErrorMsg = document.getElementById("heightErrorMsg");
    let calculatorBmiMessage = document.getElementById("calculatorBmiMessage");

  }
  if (calculatorInput1.value === "" && calculatorInput2.value !== "") {
    inputWrapper1.style.border = "1px solid #e03636";
    heightErrorMsg.innerText = "Please enter your height properly";
    heightErrorMsg.style.color = "#e03636";
    heightErrorMsg.style.fontSize = "14px";
    heightErrorMsg.transition = "0.3s";
    setTimeout(() => {
      inputWrapper1.style.border = "1px solid var(--primary-color-light)";
      heightErrorMsg.innerText = "";
    }, 3000);
  }

  if (calculatorInput2.value === "" && calculatorInput1.value !== "") {
    inputWrapper2.style.border = "1px solid #e03636";
    calculatorMessage.innerText = "Please enter your weight properly";
    calculatorMessage.style.color = "#e03636";
    calculatorMessage.style.fontSize = "14px";
    calculatorMessage.transition = "0.3s"
    setTimeout(() => {
      inputWrapper2.style.border = "1px solid var(--primary-color-light)";
      calculatorMessage.innerText = "";
    }, 3000);
  }

  if (calculatorInput1.value === "" && calculatorInput2.value === "") {
    inputWrapper1.style.border = "1px solid #e03636";
    inputWrapper2.style.border = "1px solid #e03636";
    calculatorMessage.innerText = "Please fill both the fields";
    calculatorMessage.style.color = "#e03636";
    calculatorMessage.style.fontSize = "14px";
    calculatorMessage.transition = "0.3s"
    setTimeout(() => {
      inputWrapper1.style.border = "1px solid var(--primary-color-light)";
      inputWrapper2.style.border = "1px solid var(--primary-color-light)";
      calculatorMessage.innerText = "";
    }, 3000);
  }
  
  // BMI = weight(kg) * height(m)^ 2;
  const BMI = ((calculatorInput2.value) * 10000) / ((calculatorInput1.value) * (calculatorInput1.value));

  if (calculatorInput1.value !== "" && calculatorInput2.value !== "") {
    if (BMI <= 18.4) {
      calculatorBmiMessage.innerText = `Your BMI is ${BMI} and you are underweight 😕`;
      calculatorBmiMessage.style.textAlign = "center";
      calculatorBmiMessage.style.padding = "0.6rem 1rem";
      calculatorBmiMessage.style.color = "var(--primary-color)";
      calculatorBmiMessage.style.fontWeight = "600";
      setTimeout(() => {
        calculatorBmiMessage.innerText = ``;
        calculatorBmiMessage.style.color = "none";
        calculatorBmiMessage.style.padding = "0";
      }, 5000);
    }
    else if (24.9 < BMI > 18.4) {
      calculatorBmiMessage.innerText = `Your BMI is ${BMI} and you are healthy 🥳`;
      calculatorBmiMessage.style.textAlign = "center";
      calculatorBmiMessage.style.padding = "0.6rem 1rem";
      calculatorBmiMessage.style.color = "var(--primary-color)";
      calculatorBmiMessage.style.fontWeight = "600";
      setTimeout(() => {
        calculatorBmiMessage.innerText = ``;
        calculatorBmiMessage.style.color = "none";
        calculatorBmiMessage.style.padding = "0";
      }, 5000);
    }
    else if (39.9 < BMI > 24.9) {
      calculatorBmiMessage.innerText = `Your BMI is ${BMI} and you are overweight 😣`;
      calculatorBmiMessage.style.textAlign = "center";
      calculatorBmiMessage.style.padding = "0.6rem 1rem";
      calculatorBmiMessage.style.color = "var(--primary-color)";
      calculatorBmiMessage.style.fontWeight = "600";
      setTimeout(() => {
        calculatorBmiMessage.innerText = ``;
        calculatorBmiMessage.style.color = "none";
        calculatorBmiMessage.style.padding = "0";
      }, 5000);
    }
    else {
      calculatorBmiMessage.innerText = `Your BMI is ${BMI} and you fall under a category of obese ☹️`;
      calculatorBmiMessage.style.textAlign = "center";
      calculatorBmiMessage.style.color = "var(--primary-color)";
      calculatorBmiMessage.style.padding = "0.6rem 1rem";
      setTimeout(() => {
        calculatorBmiMessage.innerText = ``;
        calculatorBmiMessage.style.color = "none";
        calculatorBmiMessage.style.padding = "0";
      }, 5000);
    }
  }
}


  // Change background of header after scrolls a certain distance on the screen
  const scrollBackground = () => {
    let navWrapper = document.querySelector("#navWrapper");
    navWrapper.style.boxShadow = "rgba(236, 236, 236, 0.453) 0px 8px 24px;"
    navWrapper.style.backgroundColor = "black";
    // if (typeof this != "undefined") {
    //   console.log("This is me speaking form inside of scrollBackground function")
    //   this.scrollY >= 50 ? (navWrapper.style.boxShadow = "black 0px 8px 24px;")
    //   : navWrapper.style.boxShadow = "none";
    //   this.scrollY >= 50 ? navWrapper.style.backgroundColor = "black"
    //     : navWrapper.style.backgroundColor = "none";
      
    // } 
  }
  if (typeof window != "undefined") {
    window.addEventListener('scroll', scrollBackground)
  }



export default function Home() {

  // Closing the nav menu if user clicks anywhere on the screen except the menu itself
  const menuRef = useRef();
  useEffect(() => {
    if (typeof window != "undefined") {
      let main = document.querySelector("#main");
      let navMenu = document.querySelector("#navMenu");
      main.addEventListener('click', async (e) => {
        if (!menuRef.current.contains(e.target)) {
          e.preventDefault();
          navMenu.style.right = "-100%";
        }
      })
      
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Blazefit - Be Fit, Be You</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="main">
        {/* Navigation */}
        <div className={styles.navContainer} id="navContainer" >
          <div className={styles.navWrapper} id="navWrapper">
            <div className={styles.logoText}>
              <span className={styles.logoText1}>Blaze</span>
              <span className={styles.logoText2}>fit</span>
            </div>
            <a href="" onClick={menuOpen} id="menuOpen"><MenuIcon className={styles.menuIcon}  /></a>
            
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
          </div>
        </div>
        
        {/* Header */}
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

        {/* Company Logos */}
        <section className={[styles.logos, styles.section].join(" ")} id="logos">
          <div className={styles.logosWrapper}>
            <Image src="/../public/img/logo1.png" className={styles.logoImg} width="100" height="30" layout={'fixed'} alt="logoImage" />
            <Image src="/../public/img/logo2.png" className={styles.logoImg} width="110" height="35" layout={'fixed'} alt="logoImage" />
            <Image src="/../public/img/logo3.png" className={styles.logoImg} width="120" height="40" layout={'fixed'} alt="logoImage" />
            <Image src="/../public/img/logo4.png" className={styles.logoImg} width="110" height="35" layout={'fixed'} alt="logoImage" />
          </div>
        </section>

        {/* Our Programs */}
        {/* `${styles.projectsPdText} ${styles.projectsPdSubdetail}`} */}
        <section className={[styles.programs ,styles.section].join(" ")} id="programs">
          <div className={styles.programsWrapper}>
            <div className={styles.programsHeading}>
              <h4 className={styles.subheading}>Our Programs</h4>
              <h2 className={styles.mainHeading}> <span className={styles.mainHeading1}>Build your</span> <span className={styles.mainHeading2}>Best Body</span></h2>
            </div>
            <div className={styles.programsCardsContainer}>
                <div className={[styles.programsCard, styles.programsCard1].join(" ")}>
                  <div className={styles.programsImgContainer}><Image src="/../public/img/program1.png" width={30} height={30} alt="dumbbell" /></div>
                    <h5>Muscle Strength</h5>
                    <p>Our apex program. Build lean muscle and see visible in just 30 days</p>
                    <ArrowForwardIcon className={styles.programArrowIcon}/ >
                </div>
                <div className={styles.programsCard}>
                    <div className={styles.programsImgContainer}><Image src="/../public/img/program3.png" width={30} height={30} alt="dumbbell" /></div>
                    <h5>Weight Management</h5>
                    <p>Tried everything method to gain weight? &nbsp;There is always a missing piece, we will give you that</p>
                    <ArrowForwardIcon className={styles.programArrowIcon} / >
                </div>
                <div className={styles.programsCard}>
                  <div className={styles.programsImgContainer}><Image src="/../public/img/program4.png" width={30} height={30} alt="dumbbell" /></div>
                    <h5>Cardio Training</h5>
                    <p>Our certified trainers will help you to build your stamina. Visible results in 14 days.</p>
                    <ArrowForwardIcon className={styles.programArrowIcon}/ >
                </div>
              </div>
            </div>
        </section>

        {/* Why choose us */}
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
                  <h5>2000 <span>+</span></h5>
                  <p>Members Worldwide</p>
                </div>
              </div>
              <div className={styles.csStatsCard}>
                <div className={styles.csStatsCardWrapper}>
                  <h5>500 <span>+</span></h5>
                  <p>Certified Trainers</p>
                </div>
              </div>
              <div className={styles.csStatsCard}>
                <div className={styles.csStatsCardWrapper}>
                  <h5>20 <span>+</span></h5>
                  <p>Fitness Programs</p>
                </div>
              </div>
              <div className={styles.csStatsCard}>
                <div className={styles.csStatsCardWrapper}>
                  <h5>10 <span>+</span></h5>
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

        {/* Pricing */}
        <section className={[styles.pricing, styles.section].join(" ")}>
          <div className={styles.pricingWrapper}>
            <div className={styles.programsHeading}>
                <h4 className={styles.subheading}>Pricing</h4>
                <h2 className={styles.mainHeading}> <span className={styles.mainHeading1}>Our</span> <span className={styles.mainHeading2}>Best Plans</span></h2>
            </div>
              <div className={[styles.pricingCard].join(" ")}>
                <div className={styles.pricingImgContainer}><Image src="/../public/img/pricing1.png" className={styles.pricingImg} width={30} height={30} alt="dumbbell" /></div>
                <h4>Basic Package</h4>
                <h3>$119</h3>
                <div className={[styles.pricingChecklist, styles.pricingChecklist1].join(" ")}>
                  <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")}  /> 4 days a week</li>
                  <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> 1 Sweatshirt</li>
                  <li className={[styles.listItem, styles.listItem3].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon3].join(" ")} /> Protein powder</li>
                  <li className={[styles.listItem, styles.listItem4].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon4].join(" ")} /> Full Body Stretching</li>
                  <li className={[styles.listItem, styles.listItem5].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon5].join(" ")} /> Yoga</li>
                </div>
                <button className={styles.pricingBtn}> <span>Enroll Now</span>  <ArrowForwardIcon className={styles.pricingBtnIcon} /> </button>
              </div>
              <div className={[styles.pricingCard, styles.pricingCardActive].join(" ")}>
                <div className={styles.pricingImgContainer}><Image src="/../public/img/pricing2.png" className={styles.pricingImg} width={30} height={30} alt="dumbbell" /></div>
                <h4>Gold Package</h4>
                <h3>$219</h3>
                <div className={[styles.pricingChecklist, styles.pricingChecklist2].join(" ")}>
                  <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> 4 days a week</li>
                  <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")}/> 1 Sweatshirt</li>
                  <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon3].join(" ")}/> Protein powder</li>
                  <li className={[styles.listItem, styles.listItem4].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon4].join(" ")}/> Full Body Stretching</li>
                  <li className={[styles.listItem, styles.listItem5].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon5].join(" ")}/> Yoga</li>
                </div>
                <button className={styles.pricingBtn}> <span>Enroll Now</span>  <ArrowForwardIcon className={styles.pricingBtnIcon} /> </button>
              </div>
              <div className={[styles.pricingCard].join(" ")}>
                <div className={styles.pricingImgContainer}><Image src="/../public/img/pricing3.png" className={styles.pricingImg} width={30} height={30} alt="dumbbell" /></div>
                <h4>Premium Package</h4>
                <h3>$259</h3>
                <div className={[styles.pricingChecklist, styles.pricingChecklist3].join(" ")}>
                  <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")}  /> 4 days a week</li>
                  <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> 1 Sweatshirt</li>
                  <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> Protein powder</li>
                  <li className={[styles.listItem, styles.listItem2].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon2].join(" ")} /> Full Body Stretching</li>
                  <li className={[styles.listItem, styles.listItem1].join(" ")}> <TaskAltOutlinedIcon className={[styles.listItemIcon, styles.listItemIcon1].join(" ")} /> Yoga</li>
                </div>
                <button className={styles.pricingBtn}> <span>Enroll Now</span>  <ArrowForwardIcon className={styles.pricingBtnIcon} /> </button>
              </div>
          </div>
        </section>

        {/* BMI calculator */}
        <section className={[styles.calculator, styles.section].join(" ")}>
          <div className={styles.calculatorWrapper}>
            <div className={styles.calculatorHeading}>
              <h4 className={styles.calculatorHeading1}>Calculate &nbsp;</h4>
              <h4 className={styles.calculatorHeading2}>Your &nbsp;BMI</h4>
            </div>
            <p className={styles.calculatorSubheading}>The official BMI calculator of Blazefit. Enter your height(cm) and weight(kg) to know your BMI.</p>
            <div className={styles.calculatorInput} id="calculatorInput">
              <div className={styles.inputWrapper1} id="inputWrapper1">
                <input type="number" className={styles.calculatorInput1} id="calculatorInput1" placeholder="Height" min={0} />
                <p>cm</p>
              </div>
              <p className={styles.heightErrorMsg} id="heightErrorMsg" style={{ margin: "0", padding: "0", transition: "0.3s"}}></p>

              <div className={styles.inputWrapper2} id="inputWrapper2">
                <input type="number" className={styles.calculatorInput2} id="calculatorInput2" placeholder="Weight" min={0} />
                <p>kg</p>
              </div>
            </div>
            <p className={styles.calculatorMessage} id="calculatorMessage" style={{ transition: "0.3s"}}></p>
            <p className={styles.calculatorBmiMessage} id="calculatorBmiMessage" style={{ transition: "0.3s"}}></p>
            <button className={styles.calculatorBtn} onClick={calculatorSubmit}> <span className={styles.calculatorBtnTxt}>Calculate Now</span> <ArrowForwardIcon className={styles.calculatorBtnIcon} /> </button>
            <div className={styles.calculatorBottom}>
              <div className={styles.calculatorImgWrapper}>
                <Image src="/img/calculate-img.png" className={styles.calculatorImg} width={180} height={350} alt="calculatorBottomImg" />
              </div>
            </div>
          </div>
        </section>
      </main>

        {/* Footer */}
        <footer className={[styles.footer, styles.section].join(" ")}>
          <div className={styles.footerWrapper}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogo1}>Blaze</span> 
              <span className={styles.footerLogo2}>fit</span>
            </div>
            <div className={styles.footerNewsletter}>
              <h5>Get weekly dose of motivation by subscribing to our Free newsletter</h5>
              <input type="email" placeholder='Your email' />
              <button className="submitBtn">Subscribe</button>
            </div>
            <div className={styles.footerNavLinks}>
              <div className={styles.footerServicesLinks}>
                <h5>Services</h5>
                <div className={styles.footerLinkItem}>
                  <a href=""><li>Muscle Strength</li></a>
                  <a href=""><li>Weight Management</li></a>
                  <a href=""><li>Cardio Training</li></a>
                </div>
                
              </div>
            <div className={styles.footerPricingLinks}>
                <h5>Pricing</h5>
                <div className={styles.footerLinkItem}>
                  <a href=""><li>Basic</li></a>
                  <a href=""><li>Gold</li></a>
                  <a href=""><li>Premium</li></a>
                </div>
               
              </div>
            <div className={styles.footerCompanyLinks}>
                <h5>About Us</h5>
                <div className={styles.footerLinkItem}>
                  <a href=""><li>Contact Us</li></a>
                  <a href=""><li>Careers</li></a>
                  <a href=""><li>Partners</li></a>
                </div>
                
              </div>
            </div>
            <div className={[styles.copyright, styles.section].join(" ")}>
              © copyright 2022, Rishav Sharma
            </div>
          </div>
        </footer>
      
    </div>
  )
}
