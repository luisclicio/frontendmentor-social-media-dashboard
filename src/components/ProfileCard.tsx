import { ProfileProps } from '../@types';
import SocialIcon from './SocialIcon';
import StatisticView from './StatisticView';
import CounterView from './CounterView';

import '../styles/components/ProfileCard.css';

export default function ProfileCard({ profile }: { profile: ProfileProps }) {
  return (
    <article className={`profile-card profile-card--${profile.socialMedia}`}>
      <header className="profile-card__header">
        <SocialIcon name={profile.socialMedia} />
        <h4 className="profile-card__header__username">{profile.username}</h4>
      </header>

      <section className="profile-card__followers">
        <h3 className="profile-card__followers__amount">
          <CounterView value={profile.followers} />
        </h3>
        <p className="profile-card__followers__text">followers</p>
      </section>

      <footer className="profile-card__footer">
        <StatisticView value={profile.todayFollowers} text=" Today" />
      </footer>
    </article>
  );
}
