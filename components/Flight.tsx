import React, { useEffect, useState } from "react";
import ReactBodymovin from "react-bodymovin";
import { motion } from "framer-motion";

import {FADE_UP_ANIMATION_VARIANTS} from "@/utils/motion-variants"
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
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div className="mt-2" variants={FADE_UP_ANIMATION_VARIANTS}>
        <ReactBodymovin options={bodymovinOptions} />
      </motion.div>
    </motion.div>
  );
};

export default Animation;
