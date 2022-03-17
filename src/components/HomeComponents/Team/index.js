import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import President from "../../../assets/images/Group 55.png";
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
                    className="col-span-3 xl:col-span-2 flex flex-row justify-center 2xl:scale-100 lg:scale-75"
                  >
                    <img src={President} alt="" />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="col-span-3 flex flex-row justify-center 2xl:scale-100 lg:scale-75"
                  >
                    <img src={President} alt="" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default Index;
