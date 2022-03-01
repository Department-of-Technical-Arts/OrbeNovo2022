import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import { WindowWidth } from "../../../utils/WinDim";

function Index({ index }) {
  return (
    <>
      <div
        className={styles.wrapper}
        style={
          WindowWidth > 576
            ? {
                marginTop: index % 2 === 1 ? 50 : 0,
              }
            : { marginTop: 50 }
        }
      >
        Index
      </div>
    </>
  );
}

export default Index;
