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
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Index() {
  const [index, setIndex] = React.useState(1);
  return (
    <>
      <Background index={index}>
        <Navbar />
        <LogoCarousel setIndex={setIndex} index={index} />
        <div className={styles.CloudWrapper}>
          <Cloud1 />
          <Page>
            {index === 1 ? (
              <>
                <AboutUs />
                <Sponsors />
                <Proshows />
                <Team />
              </>
            ) : null}
          </Page>
          <Footer />
        </div>
      </Background>
    </>
  );
}
