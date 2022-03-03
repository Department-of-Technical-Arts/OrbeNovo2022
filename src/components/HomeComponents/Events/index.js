import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import CloudDown from "../../common/Clouds/CloudDown";
import PearlCard from "../../common/EventsCard/PearlCard";
import AtmosCard from "../../common/EventsCard/AtmosCard";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function Index({ index, atmosData, pearlData }) {
  const navigate = useNavigate();
  const pageIndex = index;
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 mb-10 2xl:mb-20 2xl:mt-96 lg:mt-72 sm:mt-52 mt-32 items-center container">
          <div className="col-span-10">
            <div className={styles.wrapper}>
              <p className={[styles.backgroundText]}>Events</p>
              <p className={styles.text}>Events</p>
            </div>
          </div>

          <div className="col-span-10">
            <div className="grid grid-cols-3">
              {index === 2
                ? atmosData.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(`event/${item.id}`)}
                      className="col-span-3 sm:col-span-1 cursor-pointer"
                    >
                      <AtmosCard index={index} item={item} />
                    </div>
                  ))
                : index === 3
                ? pearlData.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(`event/${item.id}`)}
                      className="col-span-3 sm:col-span-1 cursor-pointer"
                    >
                      <PearlCard index={index} item={item} />
                    </div>
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
