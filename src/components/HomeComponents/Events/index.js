import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import CloudDown from "../../common/Clouds/CloudDown";
import PearlCard from "../../common/EventsCard/PearlCard";
import AtmosCard from "../../common/EventsCard/AtmosCard";
import { Link } from "react-router-dom";

function Index({ index, atmosData, pearlData }) {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 mb-10 2xl:mb-20 2xl:mt-96 lg:mt-72 sm:mt-52 mt-32 items-center container">
          <div className="col-span-10">
            <Title title="Events" />
          </div>

          <div className="col-span-10">
            <div className="grid grid-cols-3">
              {index === 2
                ? atmosData.map((item, index) => (
                    <Link
                      to={`event/${item.title}`}
                      className="col-span-3 sm:col-span-1"
                    >
                      <div key={index}>
                        <AtmosCard index={index} item={item} />
                      </div>
                    </Link>
                  ))
                : index === 3
                ? pearlData.map((item, index) => (
                    <Link
                      to={`event/${item.title}`}
                      className="col-span-3 sm:col-span-1"
                    >
                      <div key={index}>
                        <PearlCard index={index} item={item} />
                      </div>
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <CloudDown />
    </>
  );
}

export default Index;
