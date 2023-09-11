import React, { useContext, useEffect, useState } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`container bg-${theme}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button onClick={toggleTheme} className={`btn btn-${theme} txt-${theme}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }
