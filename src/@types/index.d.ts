export interface ProfileProps {
  socialMedia: 'facebook' | 'twitter' | 'instagram' | 'youtube';
  username: string;
  followers: number;
  todayFollowers: number;
}

export interface OverviewProps {
  socialMedia: 'facebook' | 'twitter' | 'instagram' | 'youtube';
  cardTitle: string;
  amount: number;
  percentage: number;
}

export interface DashboardProps {
  profiles: Array<ProfileProps>;
  overviews: Array<OverviewProps>;
}
