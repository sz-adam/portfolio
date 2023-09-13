import React, { useContext, useState } from 'react';
import Me4 from '../images/me4.png';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
import { AiOutlineMail } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import FlagThemeModal from '../components/FlagThemeModal';
import { FcSettings } from "react-icons/fc"
const i18n = require('../utils/i18n');

const HomeInformation = () => {
  const { language } = useContext(LanguageContext);
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (

    <AnimatedMotion animationName="homeImageAnimation">
      <div className="p-3">
        {/* modal ablak */}
        <button onClick={openModal}>  <FcSettings size={42} className="animate-spin " /></button>
        {isOpen && <FlagThemeModal closeModal={closeModal} />}
      </div>
      <div className="flex flex-col " >
        <div className="flex justify-center items-center pt-2" >
          <img
            src={Me4}
            alt="my portfolio"
            className="rounded-full w-[50%]"
            style={{ boxShadow: boxShadow }}
          />
        </div>
        <div className="text-center p-5 ">
          <h1 className="text-4xl p-1 " >{i18n.text(language, i18n.MAP['about-name'])}</h1>
          <h2 className="text-xl">{i18n.text(language, i18n.MAP['about-title'])}</h2>
        </div>

        {/**link */}
        <div>
          <div className="p-3 ">
            <a href="https://github.com/sz-adam?tab=repositories" className={"flex items-center text-center"}>
              <BsGithub className="text-xl animate-bounce" />
              <span className="ml-4">Github</span>
            </a>
          </div>
          <div className="p-3">
            <a href="mailto:szaboadam255@gmail.com" className={"flex items-center text-center"}>
              <AiOutlineMail className="text-xl animate-bounce" />
              <span className="ml-4 ">szaboadam255@gmail.com</span>
            </a>
          </div>
          <div className="p-3" >
            <a href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-06733527a/" className={"flex  items-center text-center"}>
              <BsLinkedin className="text-xl animate-bounce" />
              <span className="ml-4">linkedin</span>
            </a>
          </div>

        </div>

      </div>
    </AnimatedMotion>

  )
}

export default HomeInformation