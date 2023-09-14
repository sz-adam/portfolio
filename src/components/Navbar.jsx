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


  return (
    <Router>
      <AnimatedMotion animationName="navbarAnimatio">
        <div className="flex justify-center p-5">
          <Link to="/" className="p-2 font-bold border-b-2 border-transparent hover:border-blue-500">
            <span>{i18n.text(language, i18n.MAP['navbar-home'])}</span>
          </Link>
          <Link to="/skills" className="p-2 font-bold border-b-2 border-transparent hover:border-blue-500">
            <span>{i18n.text(language, i18n.MAP['navbar-skills'])}</span>
          </Link>
          <Link to="/portfolio" className="p-2 font-bold border-b-2 border-transparent hover:border-blue-500">
            <span>{i18n.text(language, i18n.MAP['navbar-portfolio'])}</span>
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
