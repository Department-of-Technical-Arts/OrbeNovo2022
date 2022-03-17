import React from "react";

import styles from "./styles.module.css";
import Cloud from "../../../assets/images/Mask Group 14.svg";

function Index({ children, cloud }) {
  return (
    <div className="z-20 flex flex-col mt-20">
      {cloud ? <img src={Cloud} alt="" className="" /> : null}
      <div className={styles.Wrapper} id="parent">
        {children}
      </div>
    </div>
  );
}

export default Index;
