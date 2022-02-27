import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";
import TeamCard from "../../common/TeamCard";

function Index() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
      <div className="grid grid-cols-10 gap-4 items-center mb-40">
        <div className="col-span-10">
          <Title title="Meet the Team" />
        </div>

        <div className="col-span-10">
          <div className="grid grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="col-span-1">
                <TeamCard index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Index;
