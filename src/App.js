import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Pearl from "./pages/Home";
import Atmos from "./pages/Atmos";
// import EventDetail from "./pages/EventDetail";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import { atmosData } from "./utils/AtmosData";
import { pearlData } from "./utils/PearlData";
import { teamData } from "./utils/TeamData";
import { titleSponsor } from "./utils/SponsData";
import { proshowData } from "./utils/ProshowData";
import Navbar from "./components/common/Navbar";
import Background from "./components/common/Background";

function App() {
  return (
    <ParallaxProvider>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route
            path="/*"
            element={
              <Home
                teamData={teamData}
                atmosData={atmosData}
                pearlData={pearlData}
                sponsData={titleSponsor}
                proshowData={proshowData}
              />
            }
          />
        </Routes>
      </ScrollToTop>
    </ParallaxProvider>
  );
}

export default App;
