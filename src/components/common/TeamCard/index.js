import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import { WindowWidth } from "../../../utils/WinDim";

function Index({ index }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.bg}
        style={
          WindowWidth > 576
            ? {
                marginTop: index % 2 === 1 ? 50 : 0,
              }
            : null
        }
      >
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
    </div>
  );
}

export default Index;
