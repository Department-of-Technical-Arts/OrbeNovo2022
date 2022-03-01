import React from "react";

import styles from "./styles.module.css";

function Index({ content, style }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text} style={style}>
        {content}
      </p>
    </div>
  );
}

export default Index;
