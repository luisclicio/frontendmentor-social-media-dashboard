import { useEffect, useState } from 'react';

import { DashboardProps } from '../@types';
import TopBar from '../components/TopBar';
import ProfileCard from '../components/ProfileCard';
import OverviewCard from '../components/OverviewCard';

import fakeData from '../fakeData';

import '../styles/pages/Dashboard.css';

export default function Dashboard() {
  const [data, setData] = useState<DashboardProps>({
    profiles: [],
    overviews: [],
  });

  useEffect(() => {
    setData(fakeData);
  }, []);

  return (
    <>
      <TopBar profiles={data.profiles} />

      <main className="dashboard-content">
        <section className="dashboard-content__profiles">
          {data.profiles.map((profile) => (
            <ProfileCard
              key={`${profile.socialMedia}-${profile.followers}`}
              profile={profile}
            />
          ))}
        </section>

        <section className="dashboard-content__overview">
          <h1 className="dashboard-content__overview__title">
            Overview - Today
          </h1>

          <section className="dashboard-content__overview__cards">
            {data.overviews.map((overview) => (
              <OverviewCard
                key={`${overview.socialMedia}-${overview.amount}`}
                overview={overview}
              />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}
