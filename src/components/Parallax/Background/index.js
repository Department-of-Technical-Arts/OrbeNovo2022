import React from "react";

import Background from "../../../assets/images/bg.svg";
import styles from "./styles.module.css";

function Index() {
  return (
    <div className={styles.Wrapper}>
      <img alt="" src={Background} className={styles.Background} />
    </div>
  );
}

export default Index;
