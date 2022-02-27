import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import Halo from "../../../assets/images/Ellipse 376.svg";
import BackgroundBox from "../../../assets/images/Union 28.svg";
import ForegroundBox from "../../../assets/images/Union 29.svg";

function Index({ index }) {
  return (
    <div
      className={styles.wrapper}
      style={{
        marginTop: index % 3 === 1 ? 50 : 0,
      }}
    >
      <img src={Halo} alt="" className={styles.halo} />
      <div className={styles.content}></div>
      <div className={styles.textBox}>
        <div className={styles.post}>
          <p>President</p>
        </div>
        <div className={styles.text}>
          <p>Krishna Prajwal</p>
          <p className={styles.phone}>+91 7981579984</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
