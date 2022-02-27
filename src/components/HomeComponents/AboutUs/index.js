import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";

function Index() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
      <div className="grid grid-cols-10 items-center mb-40">
        <div className="col-span-5">
          <Title title="About Us" />
        </div>
        <div className="col-span-1" />
        <div className="col-span-4">
          <BodyText
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Index;
