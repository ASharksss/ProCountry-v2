import React from 'react';
import './profiles.css'
import ProfileCard from "../../components/profileCard/profileCard";
import ProfileReviewBlock from "../../components/profileReview/profileReviewBlock";
import {NavLink} from "react-router-dom";
import ProfileCardEdit from "../../components/profileCard/profileCardEdit";
import BackBtn from "../../ui/buttons/backBtn/backBtn";
import Nothing from "../../components/nothing/Nothing";

const MyProfilePage = () => {
  return (
    <div className='myProfilePage'>
      <div className="myProfilePage_header">
        {/*<BackBtn/>*/}
        <h1 className='myProfilePage_header-title'>Мой профиль</h1>
        <button>Редактировать</button>
      </div>

      <ProfileCard/>
      {/*<ProfileCardEdit/>*/}
      <ProfileReviewBlock/>
      <NavLink to='/allReview' className='allReview'>
        <button>Смотреть все</button>
      </NavLink>

      <Nothing text={'Профиль удален'}/>
    </div>
  );
};
export default MyProfilePage;