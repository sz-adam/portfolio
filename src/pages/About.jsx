import React, { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import oneletrajz from '../images/Adam_Szabo_resume.pdf';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
import { Link } from 'react-router-dom';
const i18n = require('../utils/i18n');

const About = () => {
    const { selectedTheme } = useContext(ThemeContext);
    const { boxShadow } = selectedTheme;
    const { language, } = useContext(LanguageContext);
    return (
        <div id='about'>
            <div className='text-center p-2'>
                <AnimatedMotion animationName="homeH1Animation">
                    <h1 className="text-3xl font-bold">
                        {i18n.text(language, i18n.MAP['home-name'])}
                    </h1>
                </AnimatedMotion>
                <AnimatedMotion animationName="homeH3Animation">
                    <h3 className="text-2xl m-8 max-lg:m-2">
                        {i18n.text(language, i18n.MAP['home-junior'])}
                    </h3>
                </AnimatedMotion>
                <AnimatedMotion animationName="homePAnimation">
                    <p className="text-justify text-lg p-2 max-md:text-xl" >
                        {i18n.text(language, i18n.MAP['home-about'])}
                    </p>
                </AnimatedMotion>
                <AnimatedMotion animationName="homeButtonAnimation">
                    <div className="flex max-md:flex-col justify-around items-center pb-2 my-16 " >
                        <Link to="/portfolio" className="relative inline-flex items-center justify-center   p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-md group" style={{ boxShadow: boxShadow }}>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-700 group-hover:translate-x-0 ease">
                                <AiOutlineArrowRight size={25} />
                            </span>
                            <span >{i18n.text(language, i18n.MAP['home-portfolio'])}</span>
                        </Link>
                        <a href={oneletrajz} className="md:mt-0 mt-10 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-md group" style={{ boxShadow: boxShadow }}>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-700 group-hover:translate-x-0 ease">
                                <AiOutlineArrowRight size={25} />
                            </span>
                            <span > {i18n.text(language, i18n.MAP['home-cv'])}</span>
                        </a>
                    </div>
                </AnimatedMotion>
            </div>

        </div>
    )
}

export default About