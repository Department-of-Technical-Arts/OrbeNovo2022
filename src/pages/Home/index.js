import React from "react";

import Background from "../../components/Parallax/Background";
import Cloud1 from "../../components/Parallax/Cloud1";
import Page from "../../components/Parallax/Page";
import styles from "./styles.module.css";
import LogoCarousel from "../../components/Parallax/LogoCarousel";
import AboutUs from "../../components/HomeComponents/AboutUs";
import Sponsors from "../../components/HomeComponents/Sponsors";
import Proshows from "../../components/HomeComponents/Proshows";
import Team from "../../components/HomeComponents/Team";
import Events from "../../components/HomeComponents/Events";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from "framer-motion";

export default function Index({
  teamData,
  atmosData,
  sponsData,
  pearlData,
  proshowData,
}) {
  const [index, setIndex] = React.useState(1);

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <Background index={index}>
        <Navbar />
        <LogoCarousel setIndex={setIndex} index={index} />
        <div className={styles.CloudWrapper}>
          <Cloud1 />
          <Page>
            {index === 1 ? (
              <>
                <AboutUs />
                <Sponsors sponsData={sponsData} />
                <Proshows proshowData={proshowData} />
                <Team teamData={teamData} />
              </>
            ) : (
              <>
                <Events
                  atmosData={atmosData}
                  pearlData={pearlData}
                  index={index}
                />
              </>
            )}
          </Page>
          <Footer />
        </div>
      </Background>
    </motion.div>
  );
}
