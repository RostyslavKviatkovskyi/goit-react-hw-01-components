import { FriendListItem } from './FriendListItem';
import { AllFriends } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <AllFriends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </AllFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
