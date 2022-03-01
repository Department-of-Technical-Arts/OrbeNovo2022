import React from "react";

import styles from "./styles.module.css";
import BITS from "../../../assets/images/BITS.png";
import Brochure from "../../../assets/images/Brochure.svg";

function Index() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={BITS} alt="" className={styles.BITS} />
        <p className={styles.text}>29th March - 3rd April</p>
        <img src={Brochure} alt="" className={styles.Button} />
      </div>
    </>
  );
}

export default Index;
