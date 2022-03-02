import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import CloudDown from "../../common/Clouds/CloudDown";
import ProshowCard from "../../common/ProshowCard";

function Index({ proshowData }) {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 items-center container">
          <div className="col-span-10">
            <Title title="Proshows" />
          </div>

          <div className="col-span-10">
            <div className="grid grid-cols-2">
              {proshowData.map((item, index) => (
                <div key={index} className="col-span-2 sm:col-span-1">
                  <ProshowCard index={index} item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <CloudDown />
    </>
  );
}

export default Index;
