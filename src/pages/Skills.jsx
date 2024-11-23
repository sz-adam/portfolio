import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import AnimatedMotion from "../framerMotion/AnimatedMotion";
import { skills } from "../utils/SkillsData";
const i18n = require("../utils/i18n");

const Skills = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;
  const { language } = useContext(LanguageContext);

  const tech = skills;

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
                <p className="mt-2 text-xl font-medium italic">{skill.title}</p>
              </div>
            </AnimatedMotion>
          </AnimatedMotion>
        ))}
      </div>
    </div>
  );
};

export default Skills;
