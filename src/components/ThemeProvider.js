mport React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const initialValue = {
        theme,
        toggleTheme: () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={initialValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };
