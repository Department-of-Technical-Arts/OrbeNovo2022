import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";
import SponsCard from "../../common/SponsCard";

function Index() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
      <div className="grid grid-cols-10 gap-4 items-center mb-40">
        <div className="col-span-5">
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              height: window.innerHeight * 0.6,
              width: "100%",
              overflow: "scroll",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} />
              </div>
            ))}
          </div>
        </div>
        {/* <div className={"col-span-1"} /> */}

        <div className="col-span-5">
          <Title title="Sponsors" />
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Index;
