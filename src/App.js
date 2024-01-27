import HomeInformation from "./components/HomeInformation"
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Loading from './pages/Loading'
import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

function App() {
  const [loading, setLoading] = useState(true);
  const { selectedTheme } = useContext(ThemeContext)
  const { boxShadow } = selectedTheme;
  const { bodybackgroundColor, textColor } = selectedTheme
  const [language, setLanguage] = useState(LanguageContextDefaults.value);
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("language") !== null) {
      setLanguage(localStorage.getItem("language"));
    }
    setInitialized(true);
  }, [])

  if (initialized) {
    localStorage.setItem("language", language);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div style={{ backgroundColor: bodybackgroundColor, color: textColor }}>
        {loading ? (
          <Loading />
        ) : (
          <Router>
            <div className="w-full h-screen flex flex-col lg:flex-row justify-around items-center max-lg:h-full p-5">
              {/* information */}
              <div style={{ boxShadow: boxShadow }} className="w-[25%] h-[80%] rounded-2xl max-lg:w-full max-lg:h-full max-lg:mb-10">
                <HomeInformation />
              </div>
              {/* about */}
              <div style={{ boxShadow: boxShadow }} className="w-[70%] h-[80%] max-lg:h-full rounded-2xl overflow-auto max-lg:w-full max-lg:pt-10 scrollbar-thin scrollbar-thumb-teal-500">
                <Navbar />
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
              </div>
            </div>
          </Router>
        )}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;