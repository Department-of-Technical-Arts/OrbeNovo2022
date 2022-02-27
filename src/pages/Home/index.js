import React from "react";

import Background from "../../components/Parallax/Background";
import Cloud1 from "../../components/Parallax/Cloud1";
import Page from "../../components/Parallax/Page";
import styles from "./styles.module.css";
import LogoCarousel from "../../components/Parallax/LogoCarousel";
import AboutUs from "../../components/HomeComponents/AboutUs";
import Sponsors from "../../components/HomeComponents/Sponsors";
import Proshows from "../../components/HomeComponents/Proshows";
import Team from "../../components/HomeComponents/Team";

export default function Index() {
  return (
    <>
      <Background>
        <LogoCarousel />
        <div className={styles.CloudWrapper}>
          <Cloud1 />
          <Page>
            <AboutUs />
            <Sponsors />
            <Proshows />
            <Team />
          </Page>
        </div>
      </Background>
    </>
  );
}
