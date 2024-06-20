import React from "react";
import "./DarkMode.css";
import Sun from "./Sun";
import Moon from "./Moon";
import { useDarkMode } from './DarkModeContext';

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    localStorage.setItem("selectedTheme", "dark")

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleDarkMode} // This should call the toggleDarkMode function
                checked={isDarkMode} // This should reflect the current dark mode state
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;