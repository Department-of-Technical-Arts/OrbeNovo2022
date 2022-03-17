import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import ProshowCard from "../../common/ProshowCard";

function Index({ proshowData }) {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 items-center w-full">
          <div className="col-span-10">
            <Title title="Proshows" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-8">
            <div className="grid grid-cols-2">
              {proshowData.map((item, index) => (
                <div key={index} className="col-span-1">
                  <ProshowCard index={index} item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1" />
        </div>
      </ScrollAnimation>
    </>
  );
}

export default Index;
