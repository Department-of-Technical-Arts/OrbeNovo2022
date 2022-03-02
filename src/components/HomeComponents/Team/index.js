import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import TeamCard from "../../common/TeamCard";
import Cloud from "../../../assets/images/EndCloud.svg";

function Index({ teamData }) {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 items-center">
          <div className="col-span-10">
            <Title title="Meet the Team" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-8">
            <div className="grid grid-cols-6">
              {teamData.map((item, index) =>
                index < 3 ? (
                  <div
                    key={index}
                    className="col-span-6 sm:col-span-3 xl:col-span-2"
                  >
                    <TeamCard index={index} item={item} />
                  </div>
                ) : (
                  <div key={index} className="col-span-6 sm:col-span-3 ">
                    <TeamCard index={index} item={item} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <img src={Cloud} alt="" />
    </>
  );
}

export default Index;
