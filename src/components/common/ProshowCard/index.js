import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import styles from "./styles.module.css";
import { WindowWidth } from "../../../utils/WinDim";
import Proshow0 from "../../../assets/images/Group 48.svg";
import Proshow1 from "../../../assets/images/Group 49.svg";
import Proshow2 from "../../../assets/images/Group 50.svg";
import Proshow3 from "../../../assets/images/Group 51.svg";

function Index({ index, item }) {
  let bg;
  switch (index) {
    case 0:
      bg = Proshow0;
      break;
    case 1:
      bg = Proshow1;
      break;

    case 2:
      bg = Proshow2;
      break;

    case 3:
      bg = Proshow3;
      break;

    default:
      bg = null;
      break;
  }
  return (
    <>
      <div className={styles.wrapper}>
        <img src={bg} alt="" className="p-1 lg:p-2 2xl:p-3" />
      </div>
    </>
  );
}

export default Index;
