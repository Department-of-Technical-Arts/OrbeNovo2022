import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import { db } from "./firebase/index";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  const [teamData, setTeamData] = React.useState([]);
  const [atmosData, setAtmosData] = React.useState([]);
  const [sponsData, setSponsData] = React.useState([]);
  const [pearlData, setPearlData] = React.useState([]);
  const [proshowData, setProshowData] = React.useState([]);

  React.useEffect(async () => {
    const q = query(collection(db, "atmos"));
    const p = query(collection(db, "team"), orderBy("id", "asc"));
    const r = query(collection(db, "spons"));
    const s = query(collection(db, "pearl"));
    const t = query(collection(db, "proshow"), orderBy("id", "asc"));
    const atmos = await getDocs(q);
    const team = await getDocs(p);
    const spons = await getDocs(r);
    const pearl = await getDocs(s);
    const proshow = await getDocs(t);

    atmos.forEach((doc) => {
      const id = { id: doc.id };
      const obj = doc.data();
      Object.assign(obj, id);
      setAtmosData((prevState) => [...prevState, obj]);
    });
    pearl.forEach((doc) => {
      const id = { id: doc.id };
      const obj = doc.data();
      Object.assign(obj, id);
      setPearlData((prevState) => [...prevState, obj]);
    });
    team.forEach((doc) => {
      setTeamData((prevState) => [...prevState, doc.data()]);
    });
    spons.forEach((doc) => {
      setSponsData((prevState) => [...prevState, doc.data()]);
    });
    proshow.forEach((doc) => {
      setProshowData((prevState) => [...prevState, doc.data()]);
    });
  }, []);

  return (
    <ParallaxProvider>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                teamData={teamData}
                atmosData={atmosData}
                pearlData={pearlData}
                sponsData={sponsData}
                proshowData={proshowData}
              />
            }
          />
          <Route
            path="event"
            element={<EventDetail data={atmosData.concat(pearlData)} />}
          >
            <Route
              path=":slugId"
              element={<EventDetail data={atmosData.concat(pearlData)} />}
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </ParallaxProvider>
  );
}

export default App;
