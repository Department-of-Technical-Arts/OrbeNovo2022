import React from "react";

import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

import Cloud1 from "../../../assets/images/Cloud1.svg";
import styles from "./styles.module.css";

function Index() {
  const { ref } = useParallax({ speed: 20 });
  return (
    <>
      <img alt="" ref={ref} src={Cloud1} className={styles.Cloud1} />
      <img alt="" ref={ref} src={Cloud1} className={styles.Cloud1} />
    </>
  );
}

export default Index;
