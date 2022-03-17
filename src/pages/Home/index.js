import React from "react";

import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import styles from "./styles.module.css";
import Background from "../../components/common/Background";
import Orbenovo from "../Orbenovo";
import Pearl from "../Pearl";
import Atmos from "../Atmos";
import EventDetail from "../EventDetail";

export default function Index({
  teamData,
  atmosData,
  sponsData,
  pearlData,
  proshowData,
}) {
  return (
    <motion.div animate={{ opacity: [0, 1] }} className={styles.wrapper}>
      <Background />
      <Routes>
        <Route
          path="/"
          element={
            <Orbenovo
              sponsData={sponsData}
              teamData={teamData}
              proshowData={proshowData}
            />
          }
        />

        <Route
          path="/event"
          element={<EventDetail data={atmosData.concat(pearlData)} />}
        >
          <Route
            path=":slugId"
            element={<EventDetail data={atmosData.concat(pearlData)} />}
          />
        </Route>
        <Route path="atmos" element={<Atmos atmosData={atmosData} />} />
        <Route path="pearl" element={<Pearl pearlData={pearlData} />} />
      </Routes>
    </motion.div>
  );
}
