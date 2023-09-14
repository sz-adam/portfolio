import React, { useContext, useEffect, useState} from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AnimatedMotion from '../framerMotion/AnimatedMotion';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Skills from '../pages/Skills';

const Navbar = () => {

    const { language } = useContext(LanguageContext);
    const i18n = require('../utils/i18n');
    const [activeItem, setActiveItem] = useState(getInitialActiveItem());

    useEffect(() => {
        setActiveItem(getInitialActiveItem());
    }, []);

   
    function getInitialActiveItem() {
        const pathname = window.location.pathname;
        if (pathname === '/') return 'About';
        if (pathname === '/skills') return 'Skills';
        if (pathname === '/portfolio') return 'Portfolio';
        return 'About'; 
    }

    return (
        <Router>
            <AnimatedMotion animationName="navbarAnimatio">
                <div className="flex justify-center p-5">
                    <div>{activeItem}</div>
                    {activeItem!== 'About' && (
                    <Link to="/" className={"p-2 hover:border-b-2 font-bold"}>
                        <span onClick={()=>setActiveItem('About')}>{i18n.text(language, i18n.MAP['navbar-home'])}</span>
                    </Link>
                    )}
                      {activeItem!== 'Skills' && (
                    <Link to="/skills" className={"p-2 hover:border-b-2 font-bold "}>
                        <span onClick={()=>setActiveItem('Skills')}>{i18n.text(language, i18n.MAP['navbar-skills'])}</span>
                    </Link>
                    )}
                      {activeItem!== 'Portfolio' && (
                    <Link to="/portfolio" className={"p-2 hover:border-b-2 font-bold "}>
                        <span onClick={()=>setActiveItem('Portfolio')}>{i18n.text(language, i18n.MAP['navbar-portfolio'])}</span>
                    </Link>
                    )}
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
