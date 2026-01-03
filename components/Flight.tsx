"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import animation from "@/utils/animations/flight.json";

const Flight = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ReactBodymovin, setReactBodymovin] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    // Dynamically import react-bodymovin only on client side
    // @ts-expect-error - react-bodymovin doesn't have type definitions
    import("react-bodymovin").then((module: any) => {
      setReactBodymovin(() => module.default);
    });
  }, []);

  if (!isMounted || !ReactBodymovin) {
    return null;
  }

  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation,
  };

  return (
    <motion.div
      initial={{
        x: "-95%",
        y: "-2%",
      }}
      animate={{
        x: "50%",
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
        repeat: Infinity, // Infinity will make it loop indefinitely
        duration: 60,
        repeatDelay: 0, // Optionally add a delay between each loop iteration
      }}
    >
      <ReactBodymovin options={bodymovinOptions} />
    </motion.div>
  );
};

export default Flight;
