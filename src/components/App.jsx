import user from '../data/user.json';
import data from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';


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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory
        items={transactions}
      />
    </>
  );
}
