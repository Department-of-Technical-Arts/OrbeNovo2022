import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import SponsCard from "../../common/SponsCard";

function Index({ sponsData }) {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      offset={window.innerHeight / 2}
    >
      <div className="grid grid-cols-10 gap-4 container">
        <div className="block lg:hidden col-span-10">
          <Title title="Sponsors" />
        </div>
        <div className="col-span-10 lg:col-span-5">
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: "100%",
              overflow: "scroll",
            }}
          >
            {sponsData.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block col-span-5">
          <div
            style={{
              position: "sticky",
              top: "50%",
              // transform: "translateY(-50%)",
              marginTop: "200px",
              paddingBottom: "100px",
            }}
          >
            <Title title="Sponsors" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Index;
