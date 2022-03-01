import React from "react";

import { motion } from "framer-motion";

import Background from "../../../assets/images/newBg.png";
import styles from "./styles.module.css";

function Index({ children, index }) {
  return (
    <motion.div
      className={styles.Wrapper}
      style={{
        backgroundPosition:
          index === 1 ? "center" : index === 2 ? "right" : "left",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Index;
