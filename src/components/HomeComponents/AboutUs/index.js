import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";
import Aboutus from "../../../utils/Aboutus";

function Index({ pearl, atmos, orbenovo }) {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 items-center container">
          <div className="col-span-10 lg:col-span-5">
            <Title title="About Us" />
          </div>
          <div className="col-span-10 lg:col-span-5 lg:ml-10">
            {orbenovo ? <BodyText content={Aboutus.aboutUs} /> : null}
            {atmos ? <BodyText content={Aboutus.atmos} /> : null}
            {pearl ? <BodyText content={Aboutus.pearl} /> : null}
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default Index;
