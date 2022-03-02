import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";

function Index({ index, item }) {
  return (
    <div
      className={styles.wrapper}
      style={{
        marginTop: index % 2 === 1 ? 50 : 0,
        marginLeft: index % 2 === 1 ? 50 : 0,
      }}
    >
      <img src={item.pic} alt="" className={styles.pic} loading="eager" />
    </div>
  );
}

export default Index;
