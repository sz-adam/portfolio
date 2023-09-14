import React from 'react'
export const LanguageContextDefaults = {    
    value: "hu", 
    setValue: () => { }    
}
export const LanguageContext = React.createContext(LanguageContextDefaults);