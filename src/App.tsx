import { useState } from 'react';

import { ThemeContext } from './contexts/ThemeContext';
import Routes from './routes';

import './styles/index.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  function toggleTheme() {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}`}>
        <Routes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
