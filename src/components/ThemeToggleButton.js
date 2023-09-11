import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`btn btn-${theme} txt-${theme}`} id='global-theme-toggler'>
            Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
    )

}
export { ThemeToggleButton }
