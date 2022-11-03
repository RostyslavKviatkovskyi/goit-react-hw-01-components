import PropTypes from 'prop-types';
import { ProfileWrapper, Description, Img, Ul, Li } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileWrapper className="profile">
      <Description className="description">
        <Img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Ul className="stats">
        <Li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Li>
        <Li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Li>
        <Li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Li>
      </Ul>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
