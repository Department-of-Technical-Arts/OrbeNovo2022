import React from "react";

import styles from "./styles.module.css";

function Index({ children }) {
  return (
    <div className={styles.Wrapper} id="parent">
      <div className="container pt-96 ">{children}</div>
    </div>
  );
}

export default Index;
