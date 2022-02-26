import React from "react";

import styles from "./styles.module.css";

function Index({ title }) {
  return (
    <div className={styles.wrapper}>
      <p className={[styles.backgroundText]}>{title}</p>
      <p className={styles.text}>{title}</p>
    </div>
  );
}

export default Index;
