import React from 'react'
export const LanguageContextDefaults = {    
    value: "en", 
    setValue: () => { }    
}
export const LanguageContext = React.createContext(LanguageContextDefaults);