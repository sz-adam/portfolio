import React from "react";
import html from "../images/html.png";
import angular from "../images/angular.png";
import css from "../images/css.png";
import js from "../images/js.png";
import nodejs from "../images/nodejs.png";
import react from "../images/react.png";
import scss from "../images/scss.png";
import tailwind from "../images/tailwind.png";
import TypeScript from "../images/typescript.png";
import bootstrap from "../images/bootstrap.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import AnimatedMotion from "../framerMotion/AnimatedMotion";
const i18n = require("../utils/i18n");

const Skills = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;
  const { language } = useContext(LanguageContext);
  const tech = [
    {
      id: 1,
      src: html,
      title: "Html",
    },
    {
      id: 2,
      src: css,
      title: "Css",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
    },
    {
      id: 4,
      src: js,
      title: "Js",
    },
    {
      id: 5,
      src: nodejs,
      title: "Nodejs",
    },
    {
      id: 6,
      src: react,
      title: "React",
    },

    {
      id: 7,
      src: scss,
      title: "Scss",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 9,
      src: angular,
      title: "Angular",
    },
    {
      id: 10,
      src: TypeScript,
      title: "TypeScript",
    },
  ];

  return (
    <div id="skills" className="flex flex-col justify-center">
      <div className="text-center text-3xl mb-8">
        <AnimatedMotion animationName="textAnimation">
          <p>{i18n.text(language, i18n.MAP["skills-title"])}</p>
        </AnimatedMotion>
      </div>
      <div className="p-2 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {tech.map((skill) => (
          <AnimatedMotion animationName="skillAnimation" key={skill.id}>
            <AnimatedMotion animationName="ItemAnimation">
              <div
                className="flex flex-col items-center  p-3 rounded-[2rem] "
                style={{ boxShadow: boxShadow }}
              >
                <img
                  src={skill.src}
                  alt={skill.title}
                  className="w-[150px] h-[150px] object-contain mb-2"
                />
                <p className="mt-2">{skill.title}</p>
              </div>
            </AnimatedMotion>
          </AnimatedMotion>
        ))}
      </div>
    </div>
  );
};

export default Skills;
