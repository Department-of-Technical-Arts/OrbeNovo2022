import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import BackgroundBox from "../../../assets/images/Path 256.svg";
import ForegroundBox from "../../../assets/images/Path 257.svg";

function Index({ index }) {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          marginTop: index % 3 === 1 ? 50 : 0,
        }}
      >
        Index
      </div>
      <div className={styles.textBox}>
        <img src={BackgroundBox} alt="" className={styles.BackgroundBox} />
        <img src={ForegroundBox} alt="" className={styles.ForegroundBox} />
        <p className={styles.text}>Get your Tickets!</p>
      </div>
    </>
  );
}

export default Index;
