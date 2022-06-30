import user from '../../data/user.json';
import statistics from '../../data/statistics.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/statistics';
import { FriendList } from 'components/FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/transactionHistory';


const { username, tag, location, avatar, stats } = user;

const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
