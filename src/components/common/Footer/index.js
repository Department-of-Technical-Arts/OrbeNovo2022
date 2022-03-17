import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsInstagram } from "react-icons/bs";

import styles from "./styles.module.css";
import OrbeNovoLogo from "../../../assets/images/Orbe Novo.png";
import BodyText from "../Text/BodyText";

function Index() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={OrbeNovoLogo} alt="" className={styles.logo} />
        <div className="ml-auto mr-auto">
          <p className={styles.text}>Feel free to connect</p>
          <BodyText
            style={{ color: "#fff" }}
            content="BITS Pilani, Hyderabad Campus"
          />
          <BodyText
            style={{ color: "#fff" }}
            content="Hyderabad, Telangana - 500078"
          />
          <BodyText
            style={{ color: "#fff" }}
            content="president@hyderabad.bits-pilani.ac.in"
          />
          <div className={styles.logoGroup}>
            <p className={styles.fest}>Atmos </p>
            <a href="https://www.facebook.com/bits.atmos" target="_blank">
              <FaFacebookF className={styles.social} color="#fff" />
            </a>
            <a href="https://www.instagram.com/atmos.bitsh/" target="_blank">
              <BsInstagram className={styles.social} color="#fff" />
            </a>
          </div>
          <div className={styles.logoGroup}>
            <p className={styles.fest}>
              Pearl<span className="whitespace-pre-wrap">{"\t"}</span>
            </p>
            <a href="https://www.facebook.com/bitspearl/" target="_blank">
              <FaFacebookF className={styles.social} color="#fff" />
            </a>
            <a href="https://www.instagram.com/pearl.bitsh/" target="_blank">
              <BsInstagram className={styles.social} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// function Index() {
//   return (
//     <>
//       <div className={styles.wrapper}>
//         <img src={OrbeNovoLogoWhite} alt="" className={styles.logo} />
//         <div className="ml-auto mr-auto">
//           <p className={styles.text}>Feel free to connect</p>
//           <BodyText
//             style={{ color: "#2C3190" }}
//             content="BITS Pilani, Hyderabad Campus"
//           />
//           <BodyText
//             style={{ color: "#2C3190" }}
//             content="Hyderabad, Telangana - 500078"
//           />
//           <BodyText
//             style={{ color: "#2C3190" }}
//             content="president@hyderabad.bits-pilani.ac.in"
//           />
//           <div className={styles.logoGroup}>
//             <p className={styles.fest}>Atmos </p>
//             <a href="https://www.facebook.com/bits.atmos" target="_blank">
//               <FaFacebookF className={styles.social} />
//             </a>
//             <a href="https://www.instagram.com/atmos.bitsh/" target="_blank">
//               <BsInstagram className={styles.social} />
//             </a>
//           </div>
//           <div className={styles.logoGroup}>
//             <p className={styles.fest}>
//               Pearl<span className="whitespace-pre-wrap">{"\t"}</span>
//             </p>
//             <a href="https://www.facebook.com/bitspearl/" target="_blank">
//               <FaFacebookF className={styles.social} />
//             </a>
//             <a href="https://www.instagram.com/pearl.bitsh/" target="_blank">
//               <BsInstagram className={styles.social} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default Index;
