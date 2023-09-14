import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Skills from '../pages/Skills';

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const i18n = require('../utils/i18n');
  const [activeItem, setActiveItem] = useState(getInitialActiveItem());

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange); 
    };
  }, []);

  function handleHashChange() {   
    setActiveItem(getInitialActiveItem());
  }

  function getInitialActiveItem() {
    const hash = window.location.hash;
    if (hash === '#/') return 'About';
    if (hash === '#/skills') return 'Skills';
    if (hash === '#/portfolio') return 'Portfolio';
    return ''; 
  }

  return (
    <Router>
      <AnimatedMotion animationName="navbarAnimatio">
        <div className="flex justify-center p-5">
          <Link
            to="/"
            className={`p-2 hover:border-b-2 font-bold ${
              activeItem === 'About' ? 'border-b-2 text-green-500' : ''
            }`}
          >
            <span onClick={() => window.location.hash = '#/About'}>
              {i18n.text(language, i18n.MAP['navbar-home'])}
            </span>
          </Link>
          <Link
            to="/skills"
            className={`p-2 hover:border-b-2 font-bold ${
              activeItem === 'Skills' ? 'border-b-2 text-green-500' : ''
            }`}
          >
            <span onClick={() => window.location.hash = '#/skills'}>
              {i18n.text(language, i18n.MAP['navbar-skills'])}
            </span>
          </Link>
          <Link
            to="/portfolio"
            className={`p-2 hover:border-b-2 font-bold ${
              activeItem === 'Portfolio' ? 'border-b-2 text-green-500' : ''
            }`}
          >
            <span onClick={() => window.location.hash = '#/portfolio'}>
              {i18n.text(language, i18n.MAP['navbar-portfolio'])}
            </span>
          </Link>
        </div>

        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatedMotion>
    </Router>
  );
};

export default Navbar;
