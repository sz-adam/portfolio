import { useState, useEffect, createContext } from "react";
import theme from '../components/Theme';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState(() => {
        const savedColor = localStorage.getItem('colors')
        return savedColor ? savedColor : 'black'
    })
    // localStorage update
    useEffect(() => {
        localStorage.setItem('colors', color)
    }, [color])

    const changedColor = (newColor) => {
        setColor(newColor)
    }
    
    const selectedTheme = theme[color];
    return (
        <ThemeContext.Provider value={{ color, changedColor, selectedTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider