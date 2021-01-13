import '../styles/components/ThemeSwitcher.css';

export default function ThemeSwitcher() {
  function handleTheme() {
    document.body.classList.toggle('light');
  }

  return (
    <label htmlFor="theme-switcher" className="toggle-theme">
      <span className="toggle-theme__text">Dark Mode</span>
      <input
        type="checkbox"
        id="theme-switcher"
        className="toggle-theme__checkbox"
        onClick={handleTheme}
      />
      <span className="toggle-theme__switcher"></span>
    </label>
  );
}
