import React from "react";

import Background from "../../components/Parallax/Background";
import Cloud1 from "../../components/Parallax/Cloud1";
import Cloud2 from "../../components/Parallax/Cloud2";
import Page from "../../components/Parallax/Page";
import styles from "./styles.module.css";
import LogoCarousel from "../../components/Parallax/LogoCarousel";

export default function Index() {
  return (
    <>
      <Background>
        <LogoCarousel />
        <div className={styles.CloudWrapper}>
          <Cloud1 />
          {/* <Cloud2 /> */}
          <Page />
        </div>
      </Background>
    </>
  );
}
