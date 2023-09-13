

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import Skills from './pages/Skills';
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Loading from './pages/Loading'
import { LanguageContext, LanguageContextDefaults } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);
  const { selectedTheme } = useContext(ThemeContext)
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
  },[])

  if (initialized) {
    localStorage.setItem("language", language);
  }



  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div style={{ backgroundColor: bodybackgroundColor, color: textColor }}>
        {loading ? (
          <Loading />
        ) : (
          <>           
            
              <Home />
            
                 
          </>
        )}
      </div>
    </LanguageContext.Provider>
  );

}

export default App;
