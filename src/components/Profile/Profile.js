import PropTypes from 'prop-types';
import { Card, Descript, AvatarImg, UserDescription, UserLabel, ListStats, ItemStats} from './Profile.styled';




export const Profile = ({username, tag, location, avatar, stats}) => {
   
    return (
<Card>
  <Descript>
    <AvatarImg
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserDescription>{username}</UserDescription>
    <UserLabel>{tag}</UserLabel>
    <UserLabel>{location}</UserLabel>
  </Descript>

  <ListStats>
    <ItemStats>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </ItemStats>
    <ItemStats>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </ItemStats>
    <ItemStats>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </ItemStats>
    </ListStats>
        
</Card>
    )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,  
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
  })
};