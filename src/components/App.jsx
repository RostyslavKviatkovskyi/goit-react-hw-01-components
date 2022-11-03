import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { StatisticsList } from './statistics/StatisticsList';
import user from '../data/user';
import data from '../data/data';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats">
        <StatisticsList items={data} />
      </Statistics>
    </>
  );
};
