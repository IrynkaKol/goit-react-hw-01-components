import PropTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    
  <li className="item" key={id}>
    <span className="status">{isOnline}</span>
    <img className="avatarFriend" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.protoTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
