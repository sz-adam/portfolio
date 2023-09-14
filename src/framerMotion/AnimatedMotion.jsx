import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const animations = {
  navbarAnimatio: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
  homeImageAnimation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
  homeH1Animation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
  homeH3Animation: {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { delay: 1, duration: 1 },
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
    transition: { duration: 1, type: "spring", stiffness: 300 },
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
    exit: { opacity: 0, scale: 0.8,  },
    transition: { duration: 1.5 },
  },
}

const AnimatedMotion = ({ animationName, children }) => {
  const animation = animations[animationName];
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {

  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
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