import React from "react";

import styles from "./styles.module.css";

function Index({ content }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{content}</p>
    </div>
  );
}

export default Index;
