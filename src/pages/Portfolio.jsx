import React, { useContext, useState } from "react";
import AnimatedMotion from "../framerMotion/AnimatedMotion";
import { AnimatePresence } from "framer-motion";
import memorygame from "../images/memorygame.jpg";
import angularTodo from "../images/angular-todo.jpg";
import angularpokemon from "../images/pokemon.png";
import quiz from "../images/quiz.png";
import movie from "../images/movie.png";
import crypto from "../images/crypto-home.jpg";
import blog from "../images/blog-app.png";
import movieNative from "../images/movie-native.png";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import ProjectModal from "../components/ProjectModal";
import { AiOutlineEye } from "react-icons/ai";
import Category from "../components/Category";
const i18n = require("../utils/i18n");

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const { selectedTheme } = useContext(ThemeContext);
  const { boxShadow } = selectedTheme;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);

  const openModal = (portfolio) => {
    setSelectedProject(portfolio);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  const portfolios = [
    {
      id: 1,
      src: memorygame,
      name: "Memory Game(react)",
      category: "React",
      title: i18n.text(language, i18n.MAP["portfolio-memorygame"]),
      link: "https://github.com/sz-adam/react-memorygame-tailwindcss",
      demo: "https://sz-adam.github.io/memory-pages/",
    },
    {
      id: 2,
      src: quiz,
      name: "Quiz(react)",
      category: "React",
      title: i18n.text(language, i18n.MAP["portfolio-quiz"]),
      link: "https://github.com/sz-adam/react-quiz",
      demo: "https://sz-adam.github.io/react-quiz-pages/",
    },

    {
      id: 3,
      src: movie,
      name: "Movie(react)",
      category: "React",
      title: i18n.text(language, i18n.MAP["portfolio-movie"]),
      link: "https://github.com/sz-adam/react-movie-2.0",
      demo: "https://sz-adam.github.io/movie-2.0-pages/",
    },
    {
      id: 4,
      src: angularTodo,
      name: "Todo list(angular)",
      category: "Angular",
      title: i18n.text(language, i18n.MAP["portfolio-angularTodo"]),
      link: "https://github.com/sz-adam/Todo-list-angular-PrimeNg-",
      demo: "https://sz-adam.github.io/angular-todo-pages/",
    },

    {
      id: 5,
      src: angularpokemon,
      name: "Pokemon(angular)",
      category: "Angular",
      title: i18n.text(language, i18n.MAP["portfolio-angularPokemon"]),
      link: "https://github.com/sz-adam/angular-pokemon",
      demo: "https://sz-adam.github.io/angular-pokemon-pages/",
    },
    {
      id: 6,
      src: movieNative,
      name: "Movie",
      category: "React Native",
      title: i18n.text(language, i18n.MAP["portfolio-nativeMovie"]),
      link: "https://github.com/sz-adam/Movie-native",
      demo: "https://www.youtube.com/watch?v=ZSIY7SHp80w",
    },
    {
      id: 7,
      src: blog,
      name: "Blog(hobby project, udemy)",
      category: "Fullstack",
      title: i18n.text(language, i18n.MAP["portfolio-fullstackBlog"]),
      link: "https://github.com/sz-adam/Blog-fullsctack-",
      demo: "https://www.youtube.com/watch?v=-1KRmwhIT5g",
    },
    {
      id: 8,
      src: crypto,
      name: "Crypto(react native)",
      category: "React Native",
      title: i18n.text(language, i18n.MAP["portfolio-nativeCrypto"]),
      link: "https://github.com/sz-adam/react-native-cryptoApp/tree/master",
      demo: "https://github.com/sz-adam/react-native-cryptoApp/blob/master/README.md",
    },
  ];

  return (
    <div id="portfolio">
      <div className="text-center">
        <AnimatedMotion animationName="textAnimation">
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
      <div className="w-full h-full p-5  grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {filteredPortfolios.map((portfolio) => (
          <AnimatedMotion
            animationName="portfolioAnimations"
            key={portfolio.id}
          >
            <div
              style={{ boxShadow: boxShadow }}
              className="mx-auto bg-slate-700 rounded-2xl m-2 w-full h-96"
            >
              <img
                className="w-full h-3/4 object-cover rounded-t-2xl"
                src={portfolio.src}
                alt="Card image"
              />
              <div>
                <h2 className="font-semibold text-xl text-black text-center py-2">
                  {portfolio.name}
                </h2>
              </div>
              <div className="flex justify-center">
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
