import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-light' : 'bg-dark'
      }`}
      style={{ width: '200px', height: '200px', border: '2px solid green' }}
      id="local-themed-box"
    >
      <p
        id="local-themed-text-container"
        className={`${
          theme === 'light' ? 'txt-light' : 'txt-dark'
        }`}
      >
        Some Text
      </p>
      <button
        className={`btn ${
          localTheme === 'light' ? 'btn-light' : 'btn-dark'
        }`}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}
      >
        {localTheme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
