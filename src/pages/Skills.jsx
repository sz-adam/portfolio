import React from 'react';
import html from '../images/html.png';
import angular from '../images/angular.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import react from '../images/react.png';
import scss from '../images/scss.png';
import tailwind from '../images/tailwind.png';
import TypeScript from '../images/typescript.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
const i18n = require('../utils/i18n')



const Skills = () => {
  const { selectedTheme } = useContext(ThemeContext)
  const { boxShadow } = selectedTheme
  const tech = [
    {
      id: 1,
      src: html,
      title: 'Html',
    },
    {
      id: 2,
      src: css,
      title: 'Css',
    },
    {
      id: 3,
      src: js,
      title: 'Js',
    },
    {
      id: 4,
      src: nodejs,
      title: 'Nodejs',
    },
    {
      id: 5,
      src: react,
      title: 'React',
    },

    {
      id: 6,
      src: scss,
      title: 'Scss',
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
    },
    {
      id: 8,
      src: angular,
      title: 'Angular',
    },
    {
      id: 9,
      src: TypeScript,
      title: 'TypeScript',
    },
  ];

  return (

    <div id="skills" className="flex flex-col justify-center">
  
      <div className="p-2 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {tech.map((skill) => (
          <AnimatedMotion animationName="skillAnimation" key={skill.id}>
            <AnimatedMotion animationName="ItemAnimation">
              <div className="flex flex-col items-center  p-3 rounded-[2rem] " style={{ boxShadow: boxShadow }}>
                <img src={skill.src} alt={skill.title} className="w-[150px] h-[150px] object-contain mb-2" />
                <p className="mt-2">{skill.title}</p>
              </div>
            </AnimatedMotion>
          </AnimatedMotion>
        ))}
      </div>

    </div >

  );
};

export default Skills;
