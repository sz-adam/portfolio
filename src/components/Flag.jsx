import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import enflag from '../images/flag/uk-flag.gif'
import huflag from '../images/flag/hu-flag.gif'
import gmflag from '../images/flag/gm-flag.gif'

const Flag = () => {
  const { setLanguage } = useContext(LanguageContext);

  const languageOptions = [
    { language: 'en', flag: enflag },
    { language: 'hu', flag: huflag },
    { language: 'de', flag: gmflag },
  ];

  const handleLanguageChange = (language) => {
    setLanguage(language);
    window.location.reload();
  };

  return (
    <div className='flex'>
      {languageOptions.map((option) => (
        <div key={option.language} className='cursor-pointer mx-5'>
          <img
            src={option.flag}
            alt={`${option.language} flag`}
            onClick={() => handleLanguageChange(option.language)}
            width={40}
            height={25}
          />
        </div>
      ))}
    </div>
  );
};

export default Flag;
