import { FriendStatus, Image, OneFriend, Name } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <OneFriend>
      <FriendStatus status={isOnline}></FriendStatus>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </OneFriend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
