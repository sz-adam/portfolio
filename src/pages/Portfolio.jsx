import React, { useContext, useEffect, useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";

import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

import Category from "../components/Category";
import { portfoliosData } from "../utils/PortfolioData";
import AnimatedMotion from "../framerMotion/AnimatedMotion";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { language } = useContext(LanguageContext);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;

  const portfolios = portfoliosData(language);

  useEffect(() => {
    if (filteredPortfolios.length === 0) {
      setCurrentProject(0);
    } else if (currentProject >= filteredPortfolios.length) {
      setCurrentProject(filteredPortfolios.length - 1);
    }
  }, [filteredPortfolios, currentProject]);

  const nextProject = () => {
    if (filteredPortfolios.length > 0) {
      setCurrentProject((prev) => (prev + 1) % filteredPortfolios.length);
    }
  };

  const prevProject = () => {
    if (filteredPortfolios.length > 0) {
      setCurrentProject(
        (prev) =>
          (prev - 1 + filteredPortfolios.length) % filteredPortfolios.length
      );
    }
  };

  return (
    <div className="px-6" id="portfolio">
      <div>
        <Category
          portfolios={portfolios}
          setFilteredPortfolios={setFilteredPortfolios}
        />
      </div>

      <div className="flex items-center justify-center mt-6">
        {[...filteredPortfolios].reverse().map(
          (project, index) =>
            index === currentProject && (
              <div
                key={project.id}
                className="flex flex-col items-center w-full mx-auto"
              >
                <div className="flex flex-col items-center md:flex-row justify-center mb-4 w-full">
                  <AnimatedMotion
                    animationName="homeImageAnimation"
                    transition={{ duration: 1 }}
                    className="w-full md:w-2/3 flex flex-col justify-center mx-10 text-justify"
                  >
                    <p
                      className="text-6xl text-transparent font-bold tracking-wide text-center mb-14 first-letter:text-transparent"
                      style={{
                        WebkitTextStroke: "1px white",
                      }}
                    >
                      <span
                        className="first-letter:text-transparent"
                        style={{
                          WebkitTextStroke: "2px #22c55e",
                        }}
                      >
                        {project.name.charAt(0)}
                      </span>
                      {project.name.slice(1)}
                    </p>
                    <p className="text-xl">{project.title}</p>
                    <p className="text-center my-4 text-gray-400 text-lg">
                      #{project.stack.join(" #")}
                    </p>
                    <div
                      className="border-b border-gray-500 animate-pulse"
                      style={{ boxShadow: boxShadow }}
                    ></div>
                    <div className="mt-6 space-x-6 max-md:text-center max-md:mb-4">
                      <a href={project.demo}>
                        <button className="text-white">
                          <BsFillArrowUpRightCircleFill
                            size={44}
                            className="hover:text-gray-400"
                            style={{
                              boxShadow: boxShadow,
                              borderRadius: "50%",
                            }}
                          />
                        </button>
                      </a>
                      <a href={project.link}>
                        <button className="text-white">
                          <SiGithub
                            size={44}
                            className="hover:text-gray-400"
                            style={{
                              boxShadow: boxShadow,
                              borderRadius: "50%",
                            }}
                          />
                        </button>
                      </a>
                    </div>
                  </AnimatedMotion>
                  {/* Jobb oldalon a kép */}
                  <AnimatedMotion
                    animationName="homeImageAnimation"
                    transition={{ duration: 1.3, delay: 1 }}
                    className="h-[300px] md:h-[500px] w-full md:w-[700px]"
                  >
                    <img
                      src={project.src}
                      alt={project.title}
                      style={{ boxShadow: boxShadow }}
                      className={`w-full h-full rounded-2xl ${
                        project.category === "Mobile"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />
                  </AnimatedMotion>
                </div>
                <AnimatedMotion
                  animationName="homeImageAnimation"
                  transition={{ duration: 2, delay: 1 }}
                  className="flex justify-center md:justify-end space-x-4 w-full mt-2 mb-2"
                >
                  <div
                    className="border p-2 cursor-pointer rounded-lg hover:text-gray-400"
                    style={{ boxShadow: boxShadow }}
                    onClick={prevProject}
                  >
                    <FaAngleLeft size={26} />
                  </div>
                  <div
                    className="border p-2 cursor-pointer rounded-lg hover:text-gray-400"
                    style={{ boxShadow: boxShadow }}
                    onClick={nextProject}
                  >
                    <FaAngleRight size={26} />
                  </div>
                </AnimatedMotion>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
