import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import President from "../../../assets/images/Group 55.png";
import GenSec from "../../../assets/images/Group 66.png";
import TechSec from "../../../assets/images/Group 65.png";
import CulSecB from "../../../assets/images/Group 64.png";
import CulSecG from "../../../assets/images/Group 63.png";

function Index({ teamData }) {
  const teamMember = (index) => {
    switch (index) {
      case 0:
        return President;

      case 1:
        return GenSec;

      case 2:
        return TechSec;

      case 3:
        return CulSecB;

      case 4:
        return CulSecG;

      default:
        return null;
    }
  };
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 items-center">
          <div className="col-span-10">
            <Title title="Meet the Team" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-8">
            <div className="grid xl:hidden grid-cols-4">
              {teamData.map((item, index) =>
                index < 4 ? (
                  <div
                    key={index}
                    className="col-span-2 flex flex-row justify-center 2xl:scale-100 lg:scale-75"
                  >
                    <img src={teamMember(index)} alt="" />
                  </div>
                ) : (
                  <>
                    <div className="col-span-1" />
                    <div
                      key={index}
                      className="col-span-2 flex flex-row justify-center 2xl:scale-100 lg:scale-75"
                    >
                      <img src={teamMember(index)} alt="" />
                    </div>
                    <div className="col-span-1" />
                  </>
                )
              )}
            </div>
            <div className="xl:grid hidden grid-cols-6">
              {teamData.map((item, index) =>
                index < 3 ? (
                  <div
                    key={index}
                    className="col-span-3 xl:col-span-2 flex flex-row justify-center 2xl:scale-100 lg:scale-75"
                  >
                    <img src={teamMember(index)} alt="" />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="col-span-3 flex flex-row justify-center 2xl:scale-100 lg:scale-75"
                  >
                    <img src={teamMember(index)} alt="" />
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
