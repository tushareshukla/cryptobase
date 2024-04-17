import Button from "../../Common/Button";
import "./styles.css";
import React from "react";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";

const MainComponet = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        {/* import React from 'react'
         */}
        <motion.h1
          className="first-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Base for
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="second-heading"
        >
          CryptoLovers.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="p-tag"
        >
          Track crypto from with public api realtime with amazing ui
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="btn-flex"
        >
          <Button text={"Dashboard"} />
          <Button text={"Share App"} outlined={true} />
        </motion.div>
      </div>
      <div className="right-component">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ 
            type: "smooth",
            repeatType:"mirror",
            repeat: Infinity,
           
            duration: 2.5 }}
         className="iphone" src={iphone} alt="op"></motion.img>
        <img className="gradinet" src={gradient} alt="op1"></img>
      </div>
    </div>
  );
};

export default MainComponet;
