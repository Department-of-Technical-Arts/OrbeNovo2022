import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsInstagram } from "react-icons/bs";

import styles from "./styles.module.css";
import OrbeNovoLogo from "../../../assets/images/Orbe Novo.png";
import BodyText from "../Text/BodyText";

function Index() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={OrbeNovoLogo} alt="" className={styles.logo} />
        <div className="ml-auto mr-auto">
          <p className={styles.text}>Feel free to connect</p>
          <BodyText
            style={{ color: "#2C3190" }}
            content="BITS Pilani, Hyderabad Campus"
          />
          <BodyText
            style={{ color: "#2C3190" }}
            content="Hyderabad, Telangana - 500078"
          />
          <BodyText
            style={{ color: "#2C3190" }}
            content="president@hyderabad.bits-pilani.ac.in"
          />
          <div className={styles.logoGroup}>
            <FaFacebookF className={styles.social} />
            <BsYoutube className={styles.social} />
            <BsInstagram className={styles.social} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
