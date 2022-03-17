import React from "react";

import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

import Cloud from "../../../assets/images/Union 71.svg";
import Rectangle from "../../../assets/images/Path 281.svg";
import styles from "./styles.module.css";

function Index() {
  return (
    <div className="w-screen flex flex-col -z-10 2xl:mt-48 lg:mt-32 mt-20 absolute">
      <img alt="" src={Cloud} className=" ml-auto mr-auto" />
      <img
        alt=""
        src={Rectangle}
        className="ml-auto mr-auto 2xl:px-64 lg:px-44 scale-y-150 origin-top"
      />
    </div>
  );
}

export default Index;
