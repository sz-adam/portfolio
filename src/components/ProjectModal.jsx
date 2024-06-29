import React, { useContext } from 'react'
import { FiGithub } from "react-icons/fi"
import { AiOutlineEye } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { LanguageContext } from '../context/LanguageContext';
import AnimatedMotion from '../framerMotion/AnimatedMotion';

const ProjectModal = ({ closeModal, portfolio }) => {
    const { language } = useContext(LanguageContext);
    const i18n = require('../utils/i18n');
    console.log(portfolio)

    return (
        <div className="z-50 fixed inset-0 flex items-center justify-center p-5 ">
            <div className="absolute inset-0 bg-slate-900 opacity-20"></div>
            <AnimatedMotion animationName="modalAnimations"
                className="relative bg-slate-700 border w-2/3 h-2/3 max-sm:w-full rounded-2xl max-md:h-full flex text-center max-md:flex-col overflow-auto"
            >
                <div className="w-1/2 max-md:w-full max-sm:h-[45%] max-md:h-[55%]">
                    <img className="w-full h-full object-cover max-md:rounded-t-2xl md:rounded-l-2xl" src={portfolio.src} alt={portfolio.name} />
                </div>
                <div className="flex flex-col justify-center items-center text-center w-full  md:w-1/2 p-4">
                    <h1 className="text-white text-2xl font-bold">{portfolio.name}</h1>
                    <p className="text-gray-200 my-4 md:my-10 text-justify ">{portfolio.title}</p>
                    <div className="mt-4 space-x-4">
                        <a href={portfolio.demo}>
                            <button className="text-white">
                                <AiOutlineEye size={32} className='hover:text-blue-700' />
                            </button>
                        </a>
                        <a href={portfolio.link}>
                            <button className="text-white">
                                <FiGithub size={32} className='hover:text-blue-700' />
                            </button>
                        </a>
                    </div>
                    <div className="mt-10 max-sm:mt-2">
                        <button onClick={closeModal} className="relative inline-flex items-center justify-center p-4 px-10 py-3 border overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-700 group-hover:translate-x-0 ease">
                                <IoMdClose size={25} />
                            </span>
                            <span >{i18n.text(language, i18n.MAP['modal-close'])}</span>
                        </button>
                    </div>
                </div>
            </AnimatedMotion>
        </div>
    );
};


export default ProjectModal
