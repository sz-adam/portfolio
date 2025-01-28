import React from "react";
import { motion } from "framer-motion";

const CircleAnimation = ({ strokeColor }) => {
  return (
    <motion.svg
      className="absolute top-0 left-0 w-full h-full"
      fill="transparent"
      viewBox="2 -5 506 506"
    >
      <motion.circle
        cx="255"
        cy="255"
        r="250"
        stroke={strokeColor}
        strokeWidth="3"
        style={{
          filter: `drop-shadow(0 0 5px ${strokeColor})`,
        }}
        animate={{
          strokeDasharray: ["200 ", "200 "],
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.svg>
  );
};

export default CircleAnimation;
