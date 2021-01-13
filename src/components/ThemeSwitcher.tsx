import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/components/ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <label htmlFor="theme-switcher" className="toggle-theme">
      <span className="toggle-theme__text">Dark Mode</span>
      <input
        type="checkbox"
        id="theme-switcher"
        className="toggle-theme__checkbox"
        onClick={toggleTheme}
      />
      <span className="toggle-theme__switcher"></span>
    </label>
  );
}
