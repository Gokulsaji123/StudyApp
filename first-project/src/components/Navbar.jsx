import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ section, changeSection }) {
  return (
    <nav id="navbar">
      <motion.button
        className={section === "VARC" ? "nav-button selected" : "nav-button"}
        onClick={(event) => {
          changeSection(event.target.firstChild);
        }}
      >
        VARC
      </motion.button>
      <motion.button
        className={section === "DILR" ? "nav-button selected" : "nav-button"}
        onClick={(event) => {
          changeSection(event.target.firstChild);
        }}
      >
        DILR
      </motion.button>
      <motion.button
        className={section === "Quant" ? "nav-button selected" : "nav-button"}
        onClick={(event) => {
          changeSection(event.target.firstChild);
        }}
      >
        Quant
      </motion.button>
    </nav>
  );
}
