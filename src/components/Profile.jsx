import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.userInfo}>
        <img className={css.userImage} src={image} alt={name} />
        <p className={css.userInfoName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.userStats}>
        <li className={css.userStatsItem}>
          <span>Followers</span>
          <span className={css.statsCount}>{stats.followers}</span>
        </li>
        <li className={css.userStatsItem}>
          <span>Views</span>
          <span className={css.statsCount}>{stats.views}</span>
        </li>
        <li className={css.userStatsItem}>
          <span>Likes</span>
          <span className={css.statsCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
