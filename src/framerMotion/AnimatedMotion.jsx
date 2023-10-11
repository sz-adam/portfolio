import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const animations = {
  navbarAnimatio: {
    initial: { opacity: 0, y: -35 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
  homeImageAnimation: {
    initial: { opacity: 0, scale: 0.8, },
    animate: { opacity: 1, scale: 1, },
    exit: { opacity: 0, scale: 0.8, },
    transition: { duration: 1 },
  },
  homeH1Animation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1.3 },
  },
  homeH3Animation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { delay: 1, duration: 1.2 },
  },
  homePAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { delay: 2, duration: 1 },
  },
  homeButtonAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { delay: 3, duration: 1 },
  },
  skillAnimation: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 1.5, type: "spring", stiffness: 300 },
  },
  textAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
  ItemAnimation: {
    whileHover: {
      scale: 1.05
    },
    transition: {
      duration: 1,
    },
  },
  portfolioAnimations: {
    initial: { opacity: 0, scale: 0.8, },
    animate: { opacity: 1, scale: 1, },
    exit: { opacity: 0, scale: 0.8, },
    transition: { duration: 1.5 },
  },
}

const AnimatedMotion = ({ animationName, children }) => {
  const animation = animations[animationName];


  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={animation.transition}
      variants={animation.variants}
      whileHover={animation.whileHover}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedMotion;