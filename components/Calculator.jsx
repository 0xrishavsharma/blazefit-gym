import React from 'react';
import styles from "./../styles/Home.module.scss";
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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



const Calculator = () => {
  return (
    // {/* BMI calculator */}
    <section className={[styles.calculator, styles.section, styles.container].join(" ")} id="calculator">
      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorSection1}>
          <div className={styles.calculatorHeading}>
            <h4 className={styles.calculatorHeading1}>Calculate &nbsp;</h4>
            <h4 className={styles.calculatorHeading2}>Your BMI</h4>
          </div>
          <p className={styles.calculatorSubheading}>The official BMI calculator of Blazefit. Enter your height(cm) and weight(kg) to know your BMI.</p>
          <div className={styles.calculatorInput} id="calculatorInput">
            <div className={styles.inputWrapper1} id="inputWrapper1">
              <input type="number" className={styles.calculatorInput1} id="calculatorInput1" placeholder="Height" min={0} />
              <p>cm</p>
            </div>
            <p className={styles.heightErrorMsg} id="heightErrorMsg" style={{ margin: "0", padding: "0", transition: "0.3s" }}></p>
            <div className={styles.inputWrapper2} id="inputWrapper2">
              <input type="number" className={styles.calculatorInput2} id="calculatorInput2" placeholder="Weight" min={0} />
              <p>kg</p>
            </div>
          </div>
          <p className={styles.calculatorMessage} id="calculatorMessage" style={{ transition: "0.3s" }}></p>
          <p className={styles.calculatorBmiMessage} id="calculatorBmiMessage" style={{ transition: "0.3s" }}></p>
          <button className={styles.calculatorBtn} onClick={calculatorSubmit}> <span className={styles.calculatorBtnTxt}>Calculate Now</span> <ArrowForwardIcon className={styles.calculatorBtnIcon} /> </button>
        </div>
        <div className={styles.calculatorBottom}>
          <div className={styles.calculatorImgWrapper}>
            <Image src="/img/calculate-img.png" className={styles.calculatorImg} width={180} height={350} alt="calculatorBottomImg" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Calculator