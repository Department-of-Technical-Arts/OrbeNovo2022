import React from "react";

import { useParallax } from "react-scroll-parallax";

import styles from "./styles.module.css";
import Container from "../../common/Container";
import AboutUs from "../../HomeComponents/AboutUs";
import Sponsors from "../../HomeComponents/Sponsors";

function Index() {
  // const { ref } = useParallax({ speed: 30 });
  return (
    <div className={styles.Wrapper}>
      <Container>
        <AboutUs />
        <Sponsors />
      </Container>
    </div>
  );
}

export default Index;
