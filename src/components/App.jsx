import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { StatisticsList } from './statistics/StatisticsList';
import { FriendList } from '../components/Friends/Friends';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

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
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
