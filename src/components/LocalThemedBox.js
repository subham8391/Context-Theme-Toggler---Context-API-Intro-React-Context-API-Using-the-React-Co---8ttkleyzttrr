import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const [localTheme, setLocalTheme] = useState('dark');
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        setLocalTheme(theme);
    }, [theme]);


    return (
        <div style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box" className={`bg-${localTheme}`}>
            {/* Write code below this line */}
            <p id='local-themed-text-container' className={`txt-${localTheme}`}></p>
            <button onClick={() => setLocalTheme(prev => prev === 'dark' ? 'light' : 'dark')} id="local-theme-toggler" className={`btn btn-${localTheme}`} >Toggle local theme to {localTheme === 'dark' ? 'light' : 'dark'}</button>
        </div>
    )
}

export { LocalThemedBox };
