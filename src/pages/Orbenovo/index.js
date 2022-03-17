import React from "react";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";
import Cloud1 from "../../components/Parallax/Cloud1";
import Page from "../../components/Parallax/Page";
import OrbenovoLogo from "../../assets/images/Orbe Novo.png";
import AboutUs from "../../components/HomeComponents/AboutUs";
import Sponsors from "../../components/HomeComponents/Sponsors";
import Proshows from "../../components/HomeComponents/Proshows";
import Team from "../../components/HomeComponents/Team";
import Footer from "../../components/common/Footer";

export default function Index({ sponsData, teamData, proshowData }) {
  const [opacity, setOpacity] = React.useState(1);
  React.useEffect(() => {
    window.addEventListener("scroll", logoOpacity);
    return () => {
      window.removeEventListener("scroll", logoOpacity);
    };
  }, []);

  const logoOpacity = () => {
    let eventPosition = document.getElementById("spons").offsetTop;
    let currentPosition = window.pageYOffset;
    if (currentPosition > eventPosition) {
      setOpacity(0);
    } else if (currentPosition <= eventPosition) {
      setOpacity(1);
    }
  };
  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <div className="fixed w-full mt-10 lg:mt-0">
        <img
          src={OrbenovoLogo}
          alt=""
          className={styles.img}
          style={{ opacity: opacity }}
        />
      </div>
      <Cloud1 />
      <div className="absolute w-full">
        <Page cloud={true}>
          <div className="2xl:py-32 lg:py-24 pb-16 lg:mt-0">
            <p className={styles.date}>30th March - 3rd April </p>
            <AboutUs orbenovo={true} />
          </div>
        </Page>
        <div className={styles.divSpons} id="spons">
          <Sponsors sponsData={sponsData} />
        </div>
        <div className={styles.divProShow}>
          <Proshows proshowData={proshowData} />
        </div>
        <div className={styles.divTeam}>
          <Team teamData={teamData} />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}
