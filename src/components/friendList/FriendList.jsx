import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      ></FriendListItem>
    ))}
  </ul>
);

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;

//буде рендерити колекцію
