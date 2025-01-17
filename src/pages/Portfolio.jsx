import React, { useContext, useState } from "react";
import AnimatedMotion from "../framerMotion/AnimatedMotion";
import { AnimatePresence } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import ProjectModal from "../components/ProjectModal";
import { AiOutlineEye } from "react-icons/ai";
import Category from "../components/Category";
import { portfoliosData } from "../utils/PortfolioData";
const i18n = require("../utils/i18n");

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);

  const portfolios = portfoliosData(language);

  const openModal = (portfolio) => {
    setSelectedProject(portfolio);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <div id="portfolio">
      <div className="text-center">
        <AnimatedMotion animationName="homeImageAnimation">
          <h1 className="text-3xl p-4">
            {i18n.text(language, i18n.MAP["portfolio-title"])}
          </h1>
        </AnimatedMotion>
      </div>

      <div>
        <Category
          portfolios={portfolios}
          setFilteredPortfolios={setFilteredPortfolios}
        />
      </div>

      <div className="w-full h-full p-5 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {[...filteredPortfolios].reverse().map((portfolio) => (
          <AnimatedMotion
            animationName="portfolioAnimations"
            key={portfolio.id}
          >
            <div
              style={{ boxShadow: boxShadow }}
              className="mx-auto bg-slate-700 rounded-2xl m-2 w-full h-96"
            >
              <img
                className="w-full h-2/3 object-cover rounded-t-2xl"
                src={portfolio.src}
                alt=""
              />
              <div className="">
                <h2 className="font-semibold text-xl text-black text-center pt-1.5">
                  {portfolio.name}
                </h2>
                <h3 className=" text-center text-gray-400 font-semibold mt-0.5">
                  #{portfolio.stack[0]}
                </h3>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => openModal(portfolio)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-2xl p-2 px-8 mx-2"
                >
                  <AiOutlineEye size={26} />
                </button>
                <AnimatePresence>
                  {isOpen && selectedProject && (
                    <ProjectModal
                      closeModal={closeModal}
                      portfolio={selectedProject}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedMotion>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
