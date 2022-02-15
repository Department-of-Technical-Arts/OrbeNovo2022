import React from "react";

import Background from "../../components/Parallax/Background";
import Cloud1 from "../../components/Parallax/Cloud1";
import Cloud2 from "../../components/Parallax/Cloud2";
import Page from "../../components/Parallax/Page";
import styles from "./styles.module.css";

export default function Index() {
  return (
    <>
      <Background />
      <div className={styles.CloudWrapper}>
        <Cloud1 />
        <Page />
        <Cloud2 />
      </div>
    </>
  );
}
