import { ParallaxProvider } from "react-scroll-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";

function App() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  );
}

export default App;
