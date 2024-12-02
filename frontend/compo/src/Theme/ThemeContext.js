import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve theme mode preference from local storage
    const savedMode = localStorage.getItem('theme');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Toggle the body class based on the theme mode
    document.body.classList.toggle('dark', darkMode);
    // Save theme mode preference to local storage
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

