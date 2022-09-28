import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/Friends/friends.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/StatisticsList';
import { FriendList } from './Friends/FriendsList';



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

      <FriendList friends={friends} />;
    </div>

  );
};


