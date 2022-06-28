import PropTypes from 'prop-types';
import style from '../Profile/Profile.module.css';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <div className={style.wrapperImg}>
          <img src={avatar} alt="User avatar" className={style.avatar} />
        </div>

        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        {Object.entries(stats).map(([label, quantyty]) => {
          return (
            <li key={label} className={style.itemInfo}>
              <span className={style.label}>{label}</span>
              <span className={style.quantity}>{quantyty}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
