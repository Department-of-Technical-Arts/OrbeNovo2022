import React from "react";

import Slider from "react-slick";

import styles from "./styles.module.css";
import OrbeNovoLogo from "../../../assets/images/Orbe Novo.png";
import AtmosLogo from "../../../assets/images/Atmos+Glow.png";
import PearlLogo from "../../../assets/images/Pearl + Glow.png";

function Index() {
  var settings = {
    dots: false,
    arrows: false,
    swipe: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div className={styles.item}>
          <img src={OrbeNovoLogo} className={styles.image} alt="" />
        </div>
        <div className={styles.item}>
          <img src={AtmosLogo} className={styles.image} alt="" />
        </div>
        <div className={styles.item}>
          <img src={PearlLogo} className={styles.image} alt="" />
        </div>
        <div className={styles.item}>
          <img src={OrbeNovoLogo} className={styles.image} alt="" />
        </div>
        <div className={styles.item}>
          <img src={AtmosLogo} className={styles.image} alt="" />
        </div>
        <div className={styles.item}>
          <img src={PearlLogo} className={styles.image} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Index;
