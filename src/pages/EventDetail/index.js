import React from "react";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import posterBg from "../../assets/images/Path 364.svg";
import posterYellow from "../../assets/images/Path 365.svg";
import register from "../../assets/images/Subtraction 48.png";

import styles from "./styles.module.css";

function Index({ data }) {
  const { slugId } = useParams();
  const navigate = useNavigate();
  const result = data.filter((item) => item.id === slugId);

  return (
    result && (
      <>
        <div className={styles.navigationMobile} onClick={() => navigate(-1)}>
          <IoMdArrowBack color="white" size={32} />
          <p className={styles.navigationText}>Back to Events</p>
        </div>
        <motion.div animate={{ opacity: [0, 1] }} className={styles.wrapper}>
          <div className={styles.posterBg}>
            <img src={posterBg} alt="" />
            <img src={posterYellow} alt="" className={styles.posterYellow} />
            <img src={result[0].poster} alt="" className={styles.poster} />
            <p className={styles.posterYellowText}>{result[0].title}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.navigation} onClick={() => navigate(-1)}>
              <IoMdArrowBack color="white" size={32} />
              <p className={styles.navigationText}>Back to Events</p>
            </div>
            <div>
              <p className={styles.summary}>{result[0].description}</p>
            </div>
            <div className={styles.poc}>
              <p className={styles.pocText}>PoC</p>
              <p className={styles.pocText}>{result[0]?.pocName1}</p>
              <p className={styles.pocText}>{result[0]?.pocNumber1}</p>
              <p className={styles.pocText}>{result[0]?.pocName2}</p>
              <p className={styles.pocText}>{result[0]?.pocNumber2}</p>
            </div>
            {result[0].mode === "online and offline" || "online" ? (
              <a
                className={styles.registerBg}
                href={result[0].link}
                target="_blank"
                onClick={() => console.log("clicked")}
              >
                <div>
                  <img src={register} alt="" />
                  <p className={styles.registerText}>
                    {result[0].link ? "Register" : "Coming Soon"}
                  </p>
                </div>
              </a>
            ) : null}
          </div>
        </motion.div>
        <div className={styles.contentMobile}>
          <div>
            <p className={styles.summary}>{result[0].description}</p>
            <div className={styles.poc}>
              <p className={styles.pocText}>PoC</p>
              <p className={styles.pocText}>{result[0]?.pocName1}</p>
              <p className={styles.pocText}>{result[0]?.pocNumber1}</p>
              <p className={styles.pocText}>{result[0]?.pocName2}</p>
              <p className={styles.pocText}>{result[0]?.pocNumber2}</p>
            </div>
            {result[0].mode === "online and offline" || "online" ? (
              <a
                href={result[0].link}
                target="_blank"
                onClick={() => console.log("clicked")}
              >
                <div className={styles.registerBg}>
                  <img src={register} alt="" />
                  <p className={styles.registerText}>
                    {result[0].link ? "Register" : "Coming Soon"}
                  </p>
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </>
    )
  );
}

export default Index;
