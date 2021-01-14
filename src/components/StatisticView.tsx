import upIcon from '../assets/icon-up.svg';
import downIcon from '../assets/icon-down.svg';

import '../styles/components/StatisticView.css';

interface StatisticViewProps {
  value: number;
  text: string;
}

export default function StatisticView({ value, text }: StatisticViewProps) {
  const isPositive = value > 0;

  function absolute(number: number) {
    return number < 0 ? -number : number;
  }

  return (
    <div className="statistic-view">
      <img
        src={isPositive ? upIcon : downIcon}
        alt="Statistic"
        className="statistic-view__image"
      />
      <span
        className={`statistic-view__value statistic-view__value--${
          isPositive ? 'positive' : 'negative'
        }`}
      >
        {`${absolute(value)}${text}`}
      </span>
    </div>
  );
}
