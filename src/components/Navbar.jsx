import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const i18n = require('../utils/i18n');
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  const isActive = (itemName) => {
    return activeItem === itemName ? 'text-green-500' : '';
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveItem('About');
    } else if (location.pathname === '/skills') {
      setActiveItem('Skills');
    } else if (location.pathname === '/portfolio') {
      setActiveItem('Portfolio');
    } else {
      setActiveItem(null);
    }
  }, [location]);


  return (
   
      <div className="flex justify-center p-5">
        <Link
          to="/"
          className={`p-2 font-bold border-b-2 border-transparent hover:border-blue-700 ${isActive('About')}`}
          onClick={() => setActiveItem('About')}
        >
          <span>{i18n.text(language, i18n.MAP['navbar-home'])}</span>
        </Link>
        <Link
          to="/skills"
          className={`p-2 font-bold border-b-2 border-transparent hover:border-blue-700 ${isActive('Skills')}`}
          onClick={() => setActiveItem('Skills')}
        >
          <span>{i18n.text(language, i18n.MAP['navbar-skills'])}</span>
        </Link>
        <Link
          to="/portfolio"
          className={`p-2 font-bold border-b-2 border-transparent hover:border-blue-700 ${isActive('Portfolio')}`}
          onClick={() => setActiveItem('Portfolio')}
        >
          <span>{i18n.text(language, i18n.MAP['navbar-portfolio'])}</span>
        </Link>
      </div>
  
  );
};

export default Navbar;
