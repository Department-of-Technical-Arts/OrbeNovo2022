import React from "react";

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../firebase";
import styles from "./styles.module.css";
import Shadow from "../../assets/images/shadow.png";

function Index({ data }) {
  const { slugId } = useParams();

  const getEvent = async () => {
    const q = query(collection(db, "pearl"), where("title", "==", slugId));
    const atmos = await getDocs(q);
    atmos.forEach((doc) => {
      data.id = doc.id;
    });
  };

  React.useEffect(() => {
    if (data === []) {
      getEvent();
    }
  }, []);

  const result = data.filter((item) => item.id.includes(slugId));

  return (
    result && (
      <motion.div
        animate={{ opacity: [0, 1] }}
        className="grid grid-cols-2 w-screen h-screen"
      >
        <div className="col-span-2 lg:col-span-1 bg-gray-300 flex justify-center items-center">
          <motion.img
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            src={result[0]?.poster}
            alt=""
            className={styles.poster}
          />
          <img src={Shadow} alt="" className="absolute bottom-0 opacity-80" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center  p-9 pl-14">
          <Link to={"/"}>
            <motion.div
              whileHover={{ x: -10 }}
              className="flex flex-row items-center lg:text-lg 2xl:text-xl"
            >
              <IoMdArrowBack />
              <p> Back to Homepage</p>
            </motion.div>
          </Link>
          <p className="text-lg lg:text-xl 2xl:text-2xl font-bold mt-5 mb-5">
            {result[0]?.title}
          </p>
          {result[0]?.isWorkshop ? (
            <p className="lg:text-lg 2xl:text-xl bg-purple-400 max-w-min p-1.5 mb-3 rounded-xl text-white">
              Workshop
            </p>
          ) : null}
          {result[0]?.organiser && (
            <div className="mt-5 mb-5">
              <p className="font-semibold">Organised By</p>
              <p className=" text-xl 2xl:text-2xl">{result[0]?.organiser}</p>
            </div>
          )}
          {result[0]?.description && (
            <p className="text-lg 2xl:text-xl mb-5 lg:pr-10">
              {result[0]?.description}
            </p>
          )}
          {result[0]?.prize && (
            <p className="font-semibold text-center text-lg lg:text-xl 2xl:text-2xl">
              Prizes Worth: Rs. {result[0]?.prize}
            </p>
          )}

          <motion.a
            href={"http://" + result[0]?.link}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-2 ml-auto mr-auto m-3 text-white bg-blue-700 hover:bg-blue-500 max-w-max rounded-xl"
          >
            <motion.button>Register Now</motion.button>
          </motion.a>
          <div className="text-right mt-5">
            <p className="font-semibold lg:text-lg 2xl:text-xl">
              Point of Contact
            </p>
            <p className="lg:text-lg 2xl:text-xl">{result[0]?.pocName1}</p>
            <p className="lg:text-lg 2xl:text-xl">{result[0]?.pocNumber1}</p>
            <p className="lg:text-lg 2xl:text-xl">{result[0]?.pocName2}</p>
            <p className="lg:text-lg 2xl:text-xl">{result[0]?.pocNumber2}</p>
          </div>
        </div>
      </motion.div>
    )
  );
}

export default Index;
