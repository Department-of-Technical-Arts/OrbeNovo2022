import React from "react";

import styles from "./styles.module.css";
import BITS from "../../../assets/images/BITS.png";
import Brochure from "../../../assets/images/Brochure.svg";
import { uploadData } from "../../../firebase/Database";

function Index() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={BITS} alt="" className={styles.BITS} />
        <p className={styles.text}>29th March - 3rd April</p>
        <div
        // onClick={() => uploadData()}
        >
          <a
            href="https://firebasestorage.googleapis.com/v0/b/orbenovo-22.appspot.com/o/brochure.pdf?alt=media&token=ef88e60f-7db0-4efb-9743-df7c4d01e0f5"
            target="_blank"
          >
            <img src={Brochure} alt="" className={styles.Button} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Index;
