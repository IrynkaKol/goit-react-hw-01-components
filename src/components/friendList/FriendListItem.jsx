import PropTypes from 'prop-types';
import css from './FriendList.module.css'

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    
  <li className={css.item} key={id}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatarFriend} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.protoTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
