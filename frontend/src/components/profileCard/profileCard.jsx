import React from 'react';
import './profileCard.css'
import user_avatar from "../../asserts/icons/user_avatar.png";

const ProfileCard = () => {
  return (
    <div className='profileCard'>
      <img src={user_avatar} alt='' className='profileCard_avatar'/>
      <h1 className='profileCard_username'> Имя Фамилия </h1>
    </div>
  );
};

export default ProfileCard;