import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";
import Aboutus from "../../../utils/Aboutus";

import CloudDown from "../../common/Clouds/CloudDown";

function Index() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 items-center mb-10 2xl:mb-20 2xl:mt-96 lg:mt-72 sm:mt-52 mt-32 container">
          <div className="col-span-10 lg:col-span-5">
            <Title title="About Us" />
          </div>
          <div className="col-span-10 lg:col-span-5 lg:ml-10">
            <BodyText content={Aboutus.aboutUs} />
          </div>
        </div>
      </ScrollAnimation>
      <CloudDown />
    </>
  );
}

export default Index;
