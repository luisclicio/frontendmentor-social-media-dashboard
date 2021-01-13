import ThemeSwitcher from './ThemeSwitcher';

import '../styles/components/TopBar.css';

interface TopBarProps {
  totalFollowers: number;
}

export default function TopBar({ totalFollowers }: TopBarProps) {
  function formatNumberToLocale(number: number) {
    return Intl.NumberFormat().format(number);
  }

  return (
    <header className="top-bar">
      <div className="top-bar__wrapper">
        <section className="top-bar__wrapper__content">
          <h1 className="top-bar__wrapper__content__title">
            Social Media Dashboard
          </h1>
          <h3 className="top-bar__wrapper__content__total-followers">
            Total Followers: {formatNumberToLocale(totalFollowers)}
          </h3>
        </section>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
