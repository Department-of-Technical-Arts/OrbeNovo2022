import React from "react";

import Background from "../../components/Parallax/Background";
import Cloud1 from "../../components/Parallax/Cloud1";
import Page from "../../components/Parallax/Page";
import PageDark from "../../components/Parallax/PageDark";
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
import { useLocation } from "react-router-dom";

export default function Index({
  teamData,
  atmosData,
  sponsData,
  pearlData,
  proshowData,
}) {
  // const { state } = useLocation();
  // const pageIndex = state.pageIndex;
  // console.log(pageIndex);
  const [index, setIndex] = React.useState(1);

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <Background index={index}>
        <Navbar />
        <LogoCarousel setIndex={setIndex} index={index} />
        <div className={styles.CloudWrapper}>
          <Cloud1 />

          {index === 2 ? (
            <PageDark>
              <>
                <Events
                  atmosData={atmosData}
                  pearlData={pearlData}
                  index={index}
                />
              </>
            </PageDark>
          ) : index === 3 ? (
            <Page>
              <>
                <Events
                  atmosData={atmosData}
                  pearlData={pearlData}
                  index={index}
                />
              </>
            </Page>
          ) : (
            <Page>
              <>
                <AboutUs />
                <Sponsors sponsData={sponsData} />
                <Proshows proshowData={proshowData} />
                <Team teamData={teamData} />
              </>
            </Page>
          )}

          <Footer />
        </div>
      </Background>
    </motion.div>
  );
}
