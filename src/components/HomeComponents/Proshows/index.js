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
          <div className="col-span-10">
            <div className="grid grid-cols-3">
              {proshowData.map((item, index) =>
                index !== 3 ? (
                  <div key={index} className="col-span-1">
                    <ProshowCard index={index} item={item} />
                  </div>
                ) : (
                  <div key={index} className="col-span-3">
                    <ProshowCard index={index} item={item} />
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
