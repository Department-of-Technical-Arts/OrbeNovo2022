import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import { WindowWidth } from "../../../utils/WinDim";

function Index({ index, item }) {
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
        <img src={item.photo} alt="" className="p-1 lg:p-2 2xl:p-3" />
      </div>
      <p className={styles.text}>{item.status}</p>
    </>
  );
}

export default Index;
