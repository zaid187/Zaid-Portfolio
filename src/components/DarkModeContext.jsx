import { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const root = document.documentElement; // Get the root element, usually <html>
        if (isDarkMode) {
          root.classList.add('dark'); // Add the 'dark' class when isDarkMode is true
        } else {
          root.classList.remove('dark'); // Remove the 'dark' class when isDarkMode is false
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};