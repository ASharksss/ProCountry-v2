import React from 'react';
import user_avatar from "../../asserts/icons/user_avatar.png";

const ProfileCardEdit = () => {
  return (
    <div className='profileCardEdit'>
      <img src={user_avatar} alt='' className='profileCard_avatar'/>
      <button className='noBtn'>
        <p className='profileCard_btn solid'>Изменить фото</p>
      </button>
      <div className="profileInputEdit">
        <div className="row">
          <label>Имя</label>
          <input type="text"/>
          <label>Фамилия</label>
          <input type="text"/>
        </div>
        <div className="row">
          <label>Почта</label>
          <input type="text"/>
          <label>Телефон</label>
          <input type="text"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardEdit;