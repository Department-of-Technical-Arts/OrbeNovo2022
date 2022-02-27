import React from "react";

import Slider from "react-slick";
import { motion } from "framer-motion";

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
        <motion.div whileHover={{ scale: 1.05 }} className={styles.item}>
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            src={OrbeNovoLogo}
            className={styles.image}
            alt=""
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className={styles.item}>
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            src={AtmosLogo}
            className={styles.image}
            alt=""
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className={styles.item}>
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            src={PearlLogo}
            className={styles.image}
            alt=""
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className={styles.item}>
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            src={OrbeNovoLogo}
            className={styles.image}
            alt=""
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} v className={styles.item}>
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            src={AtmosLogo}
            className={styles.image}
            alt=""
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className={styles.item}>
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            src={PearlLogo}
            className={styles.image}
            alt=""
          />
        </motion.div>
      </Slider>
    </div>
  );
}

export default Index;
