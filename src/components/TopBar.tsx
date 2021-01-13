import { ProfileProps } from '../@types';
import ThemeSwitcher from './ThemeSwitcher';

import '../styles/components/TopBar.css';

interface TopBarProps {
  profiles: Array<ProfileProps>;
}

export default function TopBar({ profiles }: TopBarProps) {
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
            Total Followers:{' '}
            {formatNumberToLocale(
              profiles.reduce((total, { followers }) => total + followers, 0)
            )}
          </h3>
        </section>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
