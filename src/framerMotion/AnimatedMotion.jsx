import React from "react";
import { motion } from "framer-motion";

const animations = {
  navbarAnimatio: {
    initial: "hidden",
    animate: "visible",
    variants: {
      visible: { transition: { staggerChildren: 0.2 } },
      hidden: {},
    },
  },
  navbarItemAnimatio: {
    variants: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
    exit: { opacity: 1, scale: 1 },
    transition: { type: "spring" },
  },
  homeImageAnimation: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1 },
  },
  homeH1Animation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.3 },
  },
  homeH3Animation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 1, duration: 1.2 },
  },
  homePAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 2, duration: 1 },
  },
  homeButtonAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 3, duration: 1 },
  },
  skillAnimation: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.5, type: "spring", stiffness: 300 },
  },
  textAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  },
  ItemAnimation: {
    whileHover: {
      scale: 1.05,
    },
    transition: {
      duration: 1,
    },
  },
  portfolioAnimations: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 1 },
  },
  modalAnimations: {
    initial: { opacity: 0, y: -450, scale: 0 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 450, scale: 0 },
    transition: { duration: 0.6 },
  },
};

const AnimatedMotion = ({ animationName, children, className, style }) => {
  const animation = animations[animationName];

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={animation.transition}
      variants={animation.variants}
      whileHover={animation.whileHover}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedMotion;
