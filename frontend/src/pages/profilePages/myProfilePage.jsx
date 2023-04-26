import React from 'react';
import './profiles.css'
import ProfileCard from "../../components/profileCard/profileCard";
import ProfileReviewBlock from "../../components/profileReview/profileReviewBlock";
import {NavLink} from "react-router-dom";
import ProfileCardEdit from "../../components/profileCard/profileCardEdit";

const MyProfilePage = () => {
  return (
    <div className='myProfilePage'>
      <div className="myProfilePage_header">
        <h1 className='myProfilePage_header-title'>Мой профиль</h1>
        <button>Редактировать</button>
      </div>

      <ProfileCard/>
      {/*<ProfileCardEdit/>*/}
      <ProfileReviewBlock/>
      <NavLink to='/allReview' className='allReview'>
        <button>Смотреть все</button>
      </NavLink>
    </div>
  );
};
export default MyProfilePage;