import React, { useEffect, useState } from "react";
import ReactBodymovin from "react-bodymovin";
import { motion } from "framer-motion";

import animation from "@/animations/flight.json";

const Animation = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  };

  return (
    <motion.div
      initial={{
        x: 0,
        y: "-2%",
      }}
      animate={{
        x: "100%",
        y: [
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
          "2%",
          "-2%",
        ],
      }}
      transition={{
        duration: 25,
      }}
    >
      <ReactBodymovin options={bodymovinOptions} />
    </motion.div>
  );
};

export default Animation;
