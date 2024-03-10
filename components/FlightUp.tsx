import React, { useEffect, useState } from "react";
import ReactBodymovin from "react-bodymovin";
import { motion } from "framer-motion";

import animation from "@/utils/animations/flight.json";

const Flight = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  };

  return (
    <motion.div
      initial={{
        x: "-10%",
        y: "150%",
        rotate: -20,
      }}
      animate={{
        x: "100%",
        y: "-30%",
      }}
      transition={{
        duration: 25,
      }}
  
    >
      <ReactBodymovin options={bodymovinOptions} />
    </motion.div>
  );
};

export default Flight;
