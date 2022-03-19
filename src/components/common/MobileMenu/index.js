import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import menuIcon from "../../../assets/images/Group 56.svg";
import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import box1 from "../../../assets/images/Subtraction 3.svg";
import box2 from "../../../assets/images/Subtraction 6.svg";
import box3 from "../../../assets/images/Subtraction 9.svg";
import box4 from "../../../assets/images/Subtraction 10.svg";
import box5 from "../../../assets/images/Subtraction 11.svg";
import box6 from "../../../assets/images/Subtraction 47.svg";

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [orbenovo, setOrbenovo] = React.useState(false);
  const [atmos, setAtmos] = React.useState(false);
  const [pearl, setPearl] = React.useState(false);
  return (
    <>
      {isOpen ? (
        <motion.div
          animate={{ x: [window.innerWidth, 0], opacity: [0, 1] }}
          className={styles.wrapper}
        >
          <AiOutlineClose
            color="white"
            className={styles.cancel}
            onClick={() => toggleOpen()}
            size={24}
          />
          <div className={styles.navbar}>
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                isActive ? setOrbenovo(true) : setOrbenovo(false);
              }}
              onClick={() => toggleOpen()}
            >
              <div className="mr-auto ml-auto relative">
                <img src={box1} alt="" />
                <motion.img
                  animate={{ opacity: orbenovo ? 1 : 0 }}
                  whileHover={{ opacity: 1 }}
                  src={box4}
                  alt=""
                  className="absolute -top-2 left-2"
                />
                <h1
                  alt=""
                  className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl absolute"
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
              onClick={() => toggleOpen()}
            >
              <div className="mr-auto ml-auto relative">
                <img src={box2} alt="" />
                <motion.img
                  animate={{ opacity: pearl ? 1 : 0 }}
                  whileHover={{ opacity: 1 }}
                  src={box6}
                  alt=""
                  className="absolute -top-2 left-2"
                />
                <h1
                  alt=""
                  className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ltext-2xl text-white absolute"
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
              onClick={() => toggleOpen()}
            >
              <div className="mr-auto ml-auto relative">
                <img src={box3} alt="" />
                <motion.img
                  animate={{ opacity: atmos ? 1 : 0 }}
                  whileHover={{ opacity: 1 }}
                  src={box5}
                  alt=""
                  className="absolute -top-2 left-2"
                />
                <h1
                  alt=""
                  className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white absolute"
                  style={{ fontFamily: "Moreland" }}
                >
                  Atmos
                </h1>
              </div>
            </NavLink>
          </div>
        </motion.div>
      ) : null}
      <img
        src={menuIcon}
        onClick={() => toggleOpen()}
        alt=""
        className={styles.menu}
      />
    </>
  );
};
