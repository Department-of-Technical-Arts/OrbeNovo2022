import React from "react";

import { useParallax } from "react-scroll-parallax";

import Cloud2 from "../../../assets/images/Cloud2.svg";
import styles from "./styles.module.css";

function Index() {
  const { ref } = useParallax({ speed: 30 });
  return (
    <>
      <img alt="" ref={ref} src={Cloud2} className={styles.Cloud2} />
    </>
  );
}

export default Index;
