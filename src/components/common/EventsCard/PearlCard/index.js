import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import { WindowWidth } from "../../../../utils/WinDim";

function Index({ index, item }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.bg}
        style={
          WindowWidth > 576
            ? {
                marginTop: index % 3 === 1 ? 50 : 0,
              }
            : null
        }
      >
        <img src={item.poster} alt="" className={styles.poster} />
        <div className={styles.textBox}>
          <div className={styles.post}>
            <p>View More</p>
          </div>
          <div className={styles.text}>
            <p>{item.title}</p>
            {/* <p className={styles.phone}>Dolor sit</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
