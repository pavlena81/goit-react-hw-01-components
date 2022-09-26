import user from 'components/user.json';

import { Profile } from "./Profile/Profile";



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
      React homework template
    </div>
  );
};
