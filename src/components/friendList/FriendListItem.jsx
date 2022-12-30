import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
    
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatarFriend" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
