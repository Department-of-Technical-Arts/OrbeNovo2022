import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import CloudUp from "../../common/Clouds/CloudUp";
import TeamCard from "../../common/TeamCard";
import Cloud from "../../../assets/images/EndCloud.svg";

function Index() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 items-center">
          <div className="col-span-10">
            <Title title="Meet the Team" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-8">
            <div className="grid grid-cols-2">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="col-span-2 sm:col-span-1">
                  <TeamCard index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {/* <CloudUp /> */}
      <img src={Cloud} alt="" />
    </>
  );
}

export default Index;
