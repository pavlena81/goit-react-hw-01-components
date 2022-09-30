import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/Friends/friends.json';
import transactions from 'components/Transactions/transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/StatisticsList';
import { FriendList } from './Friends/FriendsList';
import { TransactionHistory } from './Transactions/transactionsHistory';


 

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>

  );
};


