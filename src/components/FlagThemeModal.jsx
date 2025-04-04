import React, { useContext } from 'react'
import Flag from './Flag'
import MultiColor from '../MultiColor/MultiColor';
import { LanguageContext } from '../context/LanguageContext';
import { GrClose } from "react-icons/gr";
import AnimatedMotion from '../framerMotion/AnimatedMotion';
const i18n = require('../utils/i18n');

const FlagThemeModal = ({ setIsOpen }) => {
  const { language, } = useContext(LanguageContext);

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div className=" absolute inset-0 bg-black opacity-50"></div>
      <AnimatedMotion
        animationName="modalAnimations"
        className=" relative bg-white rounded-lg p-8 w-auto max-md:w-11/12"
      >
        <button
          className="absolute top-0 right-0 p-2"
          onClick={() => setIsOpen(false)}
        >
          <GrClose size={20} className="animate-bounce text-black" />
        </button>
        <div className="flex justify-between pb-2 ">
          <p className="text-black">
            {" "}
            {i18n.text(language, i18n.MAP["flag-language"])}
          </p>
          <Flag />
        </div>
        <div className="flex justify-between pt-2">
          <p className="text-black">
            {i18n.text(language, i18n.MAP["flag-theme"])}
          </p>
          <MultiColor setIsOpen ={setIsOpen}/>
        </div>
      </AnimatedMotion>
    </div>
  );
}

export default FlagThemeModal
