import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import AnimatedMotion from "../framerMotion/AnimatedMotion";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import FlagThemeModal from "../components/FlagThemeModal";
import { FcSettings } from "react-icons/fc";
import { AnimatePresence } from "framer-motion";

import Avatar from "./Avatar";
import Availability from "./Availability";
const i18n = require("../utils/i18n");

const HomeInformation = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedMotion animationName="homeImageAnimation">
      <div className="p-3">
        {/* modal ablak */}
        <button onClick={() => setIsOpen(true)}>
          {" "}
          <FcSettings size={42} className="animate-spin " />
        </button>
        <AnimatePresence>
          {isOpen && <FlagThemeModal setIsOpen={setIsOpen} />}
        </AnimatePresence>
      </div>
      <div className="flex flex-col ">
        <Avatar />
        <div className="text-center p-5 ">
          <h1 className="text-4xl p-1 ">
            {i18n.text(language, i18n.MAP["about-name"])}
          </h1>
          <h2 className="text-xl">
            {i18n.text(language, i18n.MAP["about-title"])}
          </h2>
        </div>

        {/**link */}
        <div>
          <Availability
            link="https://github.com/sz-adam"
            icon={BsGithub}
            name="Github"
          />
          <Availability
            link="mailto:szaboadam255@gmail.com"
            icon={AiOutlineMail}
            name="szaboadam255@gmail.com"
          />
          <Availability
            link="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-06733527a/"
            icon={BsLinkedin}
            name="LinkedIn"
          />
        </div>
      </div>
    </AnimatedMotion>
  );
};

export default HomeInformation;
