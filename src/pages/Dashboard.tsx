import { useState } from 'react';

import { DashboardProps } from '../@types';
import ProfileCard from '../components/ProfileCard';
import TopBar from '../components/TopBar';

import fakeData from '../fakeData';

import '../styles/pages/Dashboard.css';

export default function Dashboard() {
  const [data, setData] = useState<DashboardProps>(fakeData);

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

        <section></section>
      </main>
    </>
  );
}
