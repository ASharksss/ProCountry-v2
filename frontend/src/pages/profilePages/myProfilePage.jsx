import React from 'react';
import './profiles.css'
import ProfileCard from "../../components/profileCard/profileCard";

const MyProfilePage = () => {
  return (
    <div className='myProfilePage'>
      <div className="myProfilePage_header">
        <h1 className='myProfilePage_header-title'>Мой профиль</h1>
        <button>Редактировать</button>
      </div>

      <ProfileCard/>
    </div>
  );
};
export default MyProfilePage;