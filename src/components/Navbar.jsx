import React, { useContext, useState, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Skills from '../pages/Skills';

const Navbar = () => {
    const { language } = useContext(LanguageContext);
    const i18n = require('../utils/i18n');
    
    const [activeItem, setActiveItem] = useState('About');
    
    // Figyeld a location változást, és állítsd be az activeItem-et
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            setActiveItem('About');
        } else if (currentPath === '/skills') {
            setActiveItem('Skills');
        } else if (currentPath === '/projects') {
            setActiveItem('Projects');
        }
    }, []);

    return (
        <Router>
            <AnimatedMotion animationName="navbarAnimatio">
                <div className="flex justify-center p-5">
                    <Link to="/" className={`p-2 hover:border-b-2 font-bold ${activeItem === 'About' ? 'text-teal-500 ' : ''}`}>
                        <span onClick={() => setActiveItem('About')}>{i18n.text(language, i18n.MAP['navbar-home'])}</span>
                    </Link>
                    <Link to="/skills" className={`p-2 hover:border-b-2 font-bold ${activeItem === 'Skills' ? 'text-teal-500' : ''}`}>
                        <span onClick={() => setActiveItem('Skills')}>{i18n.text(language, i18n.MAP['navbar-skills'])}</span>
                    </Link>
                    <Link to="/projects" className={`p-2 hover:border-b-2 font-bold ${activeItem === 'Projects' ? 'text-teal-500' : ''}`}>
                        <span onClick={() => setActiveItem('Projects')}>{i18n.text(language, i18n.MAP['navbar-portfolio'])}</span>
                    </Link>
                </div>

                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Portfolio />} />
                </Routes>
            </AnimatedMotion>
        </Router>
    );
};

export default Navbar;
