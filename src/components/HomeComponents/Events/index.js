import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";

import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Index({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150}>
        <div className="grid grid-cols-10 gap-4 mt-10 items-center">
          <div className="col-span-10">
            <Title title="Events" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-8">
            <div className="grid grid-cols-12">
              {data?.map((item, index) => (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index }}
                  key={index}
                  onClick={() => navigate(`/event/${item.id}`)}
                  className="col-span-6 sm:col-span-3 cursor-pointer"
                  style={{
                    borderRadius: 9999,
                    marginTop: index % 2 === 1 ? 30 : 0,
                    marginLeft: index % 3 === 0 ? 20 : 15,
                    marginRight: index % 3 === 0 ? -20 : -15,
                    marginBottom: 20,
                  }}
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={item.poster}
                    className={styles.logo}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default Index;
