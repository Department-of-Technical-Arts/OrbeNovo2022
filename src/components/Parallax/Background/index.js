import React from "react";

import Background from "../../../assets/images/newBg.png";
import styles from "./styles.module.css";

function Index({ children }) {
  return <div className={styles.Wrapper}>{children}</div>;
}

export default Index;
