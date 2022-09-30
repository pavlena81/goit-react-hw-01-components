import PropTypes from 'prop-types';

import { ListFriends, ItemFriends, Status, ImgFriends } from './Friends.styled'; 
    
export const FriendList = ({friends}) => {
    return (

    <ListFriends>
            {friends.map(({avatar, name, isOnline, id }) =>(
    
        <ItemFriends key={id}>
            <Status  isOnline={isOnline}></Status>
            <ImgFriends src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </ItemFriends>  
    ))}
                
</ListFriends>        
        
    )
}

FriendList.propTypes = {
    friendr: PropTypes.arrayOf(
        PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })
    )
    
};

