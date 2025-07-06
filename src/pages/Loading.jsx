import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
const i18n = require("../utils/i18n");

export default function Loading({ count = 5 }) {
  const { language } = useContext(LanguageContext);
  const colors = [
    "bg-[#22238f]",
    "bg-[#6b45fa]",
    "bg-[#ca3286]",
    "bg-[#fe2b49]",
    "bg-[#fe652d]",
  ];
  const loadingText = i18n.text(language, i18n.MAP["loading-loading"]);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    initial: {},
    animate: {
      y: [0, -30, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex gap-4 h-[100px] items-end"
      >
        {Array(count)
          .fill(null)
          .map((_, index) => (
            <motion.div
              key={index}
              variants={dotVariants}
              className={`w-10 h-10 rounded-full ${
                colors[index % colors.length]
              }`}
            />
          ))}
      </motion.div>
      <p className="mt-8 text-4xl font-medium">{loadingText}</p>
    </div>
  );
}
