import { OverviewProps } from '../@types';
import SocialIcon from './SocialIcon';
import StatisticView from './StatisticView';
import CounterView from './CounterView';

import '../styles/components/OverviewCard.css';

export default function OverviewCard({
  overview,
}: {
  overview: OverviewProps;
}) {
  return (
    <article className="overview-card">
      <header className="overview-card__header">
        <h4 className="overview-card__header__title">{overview.cardTitle}</h4>
        <SocialIcon name={overview.socialMedia} />
      </header>

      <section className="overview-card__content">
        <h3 className="overview-card__content__amount">
          <CounterView value={overview.amount} />
        </h3>
        <StatisticView value={overview.percentage} text="%" />
      </section>
    </article>
  );
}
