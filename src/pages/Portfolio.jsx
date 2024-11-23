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
import weather from "../images/weather.jpg";
import flutterPokemon from "../images/flutter_favorit.jpg";
import webshop from "../images/webshop.jpg";
import celestial from "../images/Celestial_bodies.jpg";
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
      name: i18n.text(language, i18n.MAP["portfolio-memorygame-name"]),
      category: "Frontend",
      stack: ["React", "TailwindCSS"],
      title: i18n.text(language, i18n.MAP["portfolio-memorygame"]),
      link: "https://github.com/sz-adam/react-memorygame-tailwindcss",
      demo: "https://sz-adam.github.io/memory-pages/",
    },
    {
      id: 2,
      src: quiz,
      name: i18n.text(language, i18n.MAP["portfolio-quiz-name"]),
      category: "Frontend",
      stack: ["React", "Scss", "Rest Api", "React Context"],
      title: i18n.text(language, i18n.MAP["portfolio-quiz"]),
      link: "https://github.com/sz-adam/react-quiz",
      demo: "https://sz-adam.github.io/react-quiz-pages/",
    },

    {
      id: 3,
      src: movie,
      name: i18n.text(language, i18n.MAP["portfolio-movie-name"]),
      category: "Frontend",
      stack: ["React", "Rest Api", "React Context"],
      title: i18n.text(language, i18n.MAP["portfolio-movie"]),
      link: "https://github.com/sz-adam/react-movie-2.0",
      demo: "https://sz-adam.github.io/movie-2.0-pages/",
    },
    {
      id: 4,
      src: angularTodo,
      name: i18n.text(language, i18n.MAP["portfolio-angularTodo-name"]),
      category: "Frontend",
      stack: ["Angular", "PrimeNG"],
      title: i18n.text(language, i18n.MAP["portfolio-angularTodo"]),
      link: "https://github.com/sz-adam/Todo-list-angular-PrimeNg-",
      demo: "https://sz-adam.github.io/angular-todo-pages/",
    },

    {
      id: 5,
      src: angularpokemon,
      name: i18n.text(language, i18n.MAP["portfolio-angularPokemon-name"]),
      category: "Frontend",
      stack: ["Angular", "Rest Api"],
      title: i18n.text(language, i18n.MAP["portfolio-angularPokemon"]),
      link: "https://github.com/sz-adam/angular-pokemon",
      demo: "https://sz-adam.github.io/angular-pokemon-pages/",
    },
    {
      id: 6,
      src: movieNative,
      name: i18n.text(language, i18n.MAP["portfolio-nativeMovie-name"]),
      category: "Mobile",
      stack: [
        "React-Native",
        "Expo",
        "Rest Api",
        "NativeWind",
        "Vector Icon",
        "Reanimated",
        "Navigation",
        "React-Context",
      ],
      title: i18n.text(language, i18n.MAP["portfolio-nativeMovie"]),
      link: "https://github.com/sz-adam/Movie-native",
      demo: "https://www.youtube.com/watch?v=ZSIY7SHp80w",
    },
    {
      id: 7,
      src: blog,
      name: "Blog",
      category: "Fullstack",
      stack: [
        "React-Node.Js",
        "Rest Api",
        "React Context",
        "TailwindCSS",
        "Framer Motion",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "JSON Web Tokens",
        "Bcryptjs",
      ],
      title: i18n.text(language, i18n.MAP["portfolio-fullstackBlog"]),
      link: "https://github.com/sz-adam/Blog-fullsctack-",
      demo: "https://www.youtube.com/watch?v=-1KRmwhIT5g",
    },

    {
      id: 8,
      src: flutterPokemon,
      name: i18n.text(language, i18n.MAP["portfolio-flutterPokemon-name"]),
      category: "Mobile",
      stack: ["Flutter", "Http", "Riverpood", "Navigation", "Animation"],
      title: i18n.text(language, i18n.MAP["portfolio-flutterPokemon"]),
      link: "https://github.com/sz-adam/pokemon_flutter",
      demo: "https://youtube.com/shorts/fKXCqPQCjlw",
    },
    {
      id: 9,
      src: weather,
      name: i18n.text(language, i18n.MAP["portfolio-flutterWeather-name"]),
      category: "Mobile",
      stack: ["Flutter", "Http", "Dotenv"],
      title: i18n.text(language, i18n.MAP["portfolio-flutterWeather"]),
      link: "https://github.com/sz-adam/weather_flutter",
      demo: "https://github.com/sz-adam/weather_flutter",
    },
    {
      id: 10,
      src: webshop,
      name: i18n.text(language, i18n.MAP["portfolio-webshop-name"]),
      category: "Frontend",
      stack: ["React", "Rest Api", "Reducer", "React Context", "TailwindCSS"],
      title: i18n.text(language, i18n.MAP["portfolio-webshop"]),
      link: "https://github.com/sz-adam/webshop-react",
      demo: "https://sz-adam.github.io/webshop-react/",
    },
    {
      id: 11,
      src: celestial,
      name: i18n.text(language, i18n.MAP["portfolio-flutterCelestical-name"]),
      category: "Mobile",
      stack: ["Flutter", "Animation"],
      title: i18n.text(language, i18n.MAP["portfolio-flutterCelestical"]),
      link: "https://github.com/sz-adam/flutter-exercises/tree/master/planets",
      demo: "https://youtube.com/shorts/iEXbnxmtVwU",
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

      <div className="w-full h-full p-5 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
                className="w-full h-2/3 object-cover rounded-t-2xl"
                src={portfolio.src}
                alt="Card image"
              />
              <div className="">
                <h2 className="font-semibold text-xl text-black text-center pt-1.5">
                  {portfolio.name}
                </h2>
                <h3 className=" text-center text-gray-400 font-semibold mt-0.5">
                # {portfolio.stack[0]}
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
