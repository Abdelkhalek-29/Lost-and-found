import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext'; // Update the import path

import './TestTheme.css';

function TestTheme() {
  const { darkMode, toggleTheme } = useTheme(); // Use the useTheme hook

  return (
    <ThemeProvider>
      <div className={`boxtest ${darkMode ? 'dark' : ''}`}>
        <div className='TextH'>Abdalrhman Ahmed</div>
        <div className='ParagraphTest'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Example of toggling theme */}
      </div>
    </ThemeProvider>
  );
}

export default TestTheme;
