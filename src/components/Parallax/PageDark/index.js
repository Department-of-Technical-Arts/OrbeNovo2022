import React from "react";

import styles from "./styles.module.css";

function Index({ children }) {
  return (
    <div className={styles.Wrapper} id="parent">
      {children}
    </div>
  );
}

export default Index;
