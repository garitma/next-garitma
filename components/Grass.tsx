import React, { useEffect, useState } from "react";
import ReactBodymovin from "react-bodymovin";
import { motion } from "framer-motion";

import animation from "@/animations/colored-grass.json";

const Grass = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  };

  return (
    <div className="flip">
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  );
};

export default Grass;
