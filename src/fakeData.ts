import { DashboardProps } from './@types';

const fakeData: DashboardProps = {
  profiles: [
    {
      socialMedia: 'facebook',
      username: '@nathanf',
      followers: 1987,
      todayFollowers: 12,
    },
    {
      socialMedia: 'twitter',
      username: '@nathanf',
      followers: 1044,
      todayFollowers: 99,
    },
    {
      socialMedia: 'instagram',
      username: '@realnathanf',
      followers: 11734,
      todayFollowers: 1099,
    },
    {
      socialMedia: 'youtube',
      username: 'Nathan F.',
      followers: 8239,
      todayFollowers: -144,
    },
  ],
  overviews: [
    {
      socialMedia: 'facebook',
      cardTitle: 'Page Views',
      amount: 87,
      percentage: 3,
    },
    {
      socialMedia: 'facebook',
      cardTitle: 'Likes',
      amount: 52,
      percentage: -2,
    },
    {
      socialMedia: 'instagram',
      cardTitle: 'Likes',
      amount: 5462,
      percentage: 2257,
    },
    {
      socialMedia: 'instagram',
      cardTitle: 'Profile Views',
      amount: 52000,
      percentage: 1375,
    },
    {
      socialMedia: 'twitter',
      cardTitle: 'Retweets',
      amount: 117,
      percentage: 303,
    },
    {
      socialMedia: 'twitter',
      cardTitle: 'Likes',
      amount: 507,
      percentage: 553,
    },
    {
      socialMedia: 'youtube',
      cardTitle: 'Likes',
      amount: 107,
      percentage: -19,
    },
    {
      socialMedia: 'youtube',
      cardTitle: 'Total Views',
      amount: 1407,
      percentage: -12,
    },
  ],
};

export default fakeData;
