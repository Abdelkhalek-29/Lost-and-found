import React from 'react';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import './testPage2.css';

function TestPage2() {
  const { darkMode } = useTheme(); // Use useTheme hook

  return (
    <div className={`boxtest1 ${darkMode ? 'dark' : ''}`}>
        <div className='TextH1'>Abdalrhman Ahmed</div>
        <div className='ParagraphTest1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
    </div>
  );
}

export default TestPage2;
