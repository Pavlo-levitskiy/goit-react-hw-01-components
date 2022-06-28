import PropTypes from 'prop-types';
import '../FriendList/friendList.css';
const FriendList = ({ friends = [] }) => {
  return (
    <ul className="Friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className="item">
            <span className={`status ${isOnline ? 'green' : 'red'}`}></span>
            <div className="Wrapper-img">
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
            </div>

            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ).isRequired,
};

export default FriendList;
