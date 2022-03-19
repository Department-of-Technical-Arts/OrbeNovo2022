import React from "react";

import styles from "./styles.module.css";
import box1 from "../../../assets/images/Subtraction 3.svg";
import box2 from "../../../assets/images/Subtraction 6.svg";
import box3 from "../../../assets/images/Subtraction 9.svg";
import bits from "../../../assets/images/Bits Pilani White.png";
import box4 from "../../../assets/images/Subtraction 10.svg";
import box5 from "../../../assets/images/Subtraction 11.svg";
import box6 from "../../../assets/images/Subtraction 47.svg";
import menuIcon from "../../../assets/images/Group 56.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MobileMenu } from "../MobileMenu";

function Index() {
  const [blur, setBlur] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);
  const [orbenovo, setOrbenovo] = React.useState(false);
  const [atmos, setAtmos] = React.useState(false);
  const [pearl, setPearl] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", logoOpacity);
    return () => {
      window.removeEventListener("scroll", logoOpacity);
    };
  }, []);

  const logoOpacity = () => {
    let currentPosition = window.pageYOffset;
    if (currentPosition < window.innerHeight) {
      setBlur((currentPosition / window.innerHeight) * 12);
      setOpacity(1 - (currentPosition * 2) / window.innerHeight);
    } else {
      setOpacity(0);
      setBlur(12);
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ backdropFilter: `blur(${blur}px)` }}
    >
      <div className="text-white 2xl:ml-20 lg:ml-10 mt-5 2xl:mt-10">
        <img
          src={bits}
          alt=""
          className={styles.bits}
          style={{ opacity: opacity }}
        />
      </div>
      <div className={styles.navbar}>
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            isActive ? setOrbenovo(true) : setOrbenovo(false);
          }}
        >
          <div className="-mr-28 relative">
            <img src={box1} alt="" />
            <motion.img
              animate={{ opacity: orbenovo ? 1 : 0 }}
              whileHover={{ opacity: 1 }}
              src={box4}
              alt=""
              className="absolute -top-2 left-4"
            />
            <h1
              alt=""
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white lg:text-2xl 2xl:text-3xl absolute"
              style={{ fontFamily: "Moreland" }}
            >
              Orbe Novo
            </h1>
          </div>
        </NavLink>
        <NavLink
          to={"pearl"}
          style={({ isActive }) => {
            isActive ? setPearl(true) : setPearl(false);
          }}
        >
          <div className="relative">
            <img src={box2} alt="" />
            <motion.img
              animate={{ opacity: pearl ? 1 : 0 }}
              whileHover={{ opacity: 1 }}
              src={box6}
              alt=""
              className="absolute -top-2 left-4"
            />
            <h1
              alt=""
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl 2xl:text-3xl text-white absolute"
              style={{ fontFamily: "Moreland" }}
            >
              Pearl
            </h1>
          </div>
        </NavLink>
        <NavLink
          to={"atmos"}
          style={({ isActive }) => {
            isActive ? setAtmos(true) : setAtmos(false);
          }}
        >
          <div className="-ml-28 relative">
            <img src={box3} alt="" />
            <motion.img
              animate={{ opacity: atmos ? 1 : 0 }}
              whileHover={{ opacity: 1 }}
              src={box5}
              alt=""
              className="absolute -top-2 left-4"
            />
            <h1
              alt=""
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-2xl 2xl:text-3xl text-white absolute"
              style={{ fontFamily: "Moreland" }}
            >
              Atmos
            </h1>
          </div>
        </NavLink>
      </div>
      <div>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Index;
