"use client";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import animation from "@/utils/animations/flight.json";

const Flight = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [ReactBodymovin, setReactBodymovin] = useState<any>(null);

  // Generate random y-axis translations for fluid movement
  const randomYValues = useMemo(() => {
    const values: string[] = [];
    const numPoints = 20;
    const minY = -3;
    const maxY = 3;

    for (let i = 0; i < numPoints; i++) {
      // Generate random value between minY and maxY
      const randomValue = Math.random() * (maxY - minY) + minY;
      values.push(`${randomValue.toFixed(2)}%`);
    }

    return values;
  }, []);

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
        y: randomYValues[0] || "-2%",
      }}
      animate={{
        x: "51%",
        y: randomYValues,
      }}
      transition={{
        repeat: Infinity,
        duration: 45,
        repeatDelay: 0,
      }}
    >
      <ReactBodymovin options={bodymovinOptions} />
    </motion.div>
  );
};

export default Flight;
