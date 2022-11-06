import { FriendListItem } from './FriendListItem';
import { AllFriends } from './Friends.styled';

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
