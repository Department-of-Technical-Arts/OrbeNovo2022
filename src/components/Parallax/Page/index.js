import React from "react";

import { useParallax } from "react-scroll-parallax";

import styles from "./styles.module.css";

function Index() {
  const { ref } = useParallax({ speed: 10 });
  return <div ref={ref} className={styles.Wrapper}></div>;
}

export default Index;
