import React, { useState } from 'react';
import { updateUsers } from '../../services/Api';
import logo from '../../assets/logo.png';
import picture from '../../assets/picture.png';
import css from './UserCard.module.css';

export default function UserCard(user) {
  const [selection, setSelection] = useState(user.user.followed);
  const [followersCount, setFollowersCount] = useState(user.user.followers);

  const handleClick = () => {
    setSelection(!selection);
    if (selection) {
      updateUsers(user.user.id, {
        followed: !selection,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    if (!selection) {
      updateUsers(user.user.id, {
        followed: !selection,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <li className={css.userCard} id={user.user.id}>
      <div className={css.imgContainer}>
        <img src={`${logo}`} alt="logo" className={css.logo} />
        <img src={`${picture}`} alt="pictures" className={css.picture} />
        <div className={css.userAvatarContainer}>
          <img
            className={css.userAvatar}
            src={user.user.avatar}
            alt="user photos"
          />
        </div>
      </div>
      <div className={css.userInfo}>
        <p className={css.userTweets}>{user.user.tweets} tweets</p>
        <p className={css.userFollowers}>
          {followersCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          Followers
        </p>
        <button
          type="button"
          className={css.userToggleFollow}
          style={{ background: selection ? '#5CD3A8' : '#EBD8FF' }}
          onClick={() => handleClick(user.user.id)}
        >
          {selection ? 'following' : 'follow'}
        </button>
      </div>
    </li>
  );
}
