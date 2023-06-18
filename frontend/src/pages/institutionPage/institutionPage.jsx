import React from 'react';
import './institutionPage.css'
import InstitutionLeader from "../../components/institutionLeader/institutionLeader";
import InstitutionInfo from "../../components/institutionInfo/institutionInfo";
import ReviewsPhoto from "../../components/ReviewsPhoto/ReviewsPhoto";
import InstitutionReviews from "../../components/InstitutuionReviews/InstitutionReviews";
import {NavLink} from "react-router-dom";

const InstitutionPage = () => {
  return (
    <div className='institutionPage'>
      <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>Название учреждения</h1>
          <button>Редактировать</button>
        </div>
        <div className="row space-between">
          <div className="bread_crumb">
            тут хлебные крошки
          </div>
        </div>
      </div>


     {/* <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>Название учреждения</h1>
        </div>
        <div className="row space-between">
          <button className='noBtn'><p className='solid btn-text'>Изменить наименование</p></button>
          <button className='noBtn'><p className='solid btn-text'>Изменить директора</p></button>
        </div>
      </div> v2*/}


     {/* <div className="institutionPage_header">
        <div className="row space-between">
          <h1 className='institutionPage-title'>Название учреждения</h1>
          <button>Подписаться</button>
        </div>
        <div className="row space-between">
          <div className="bread_crumb">
            тут хлебные крошки
          </div>
          <button className='noBtn'><p className='solid btn-text'>представитель учреждения?</p></button>
        </div>
      </div> v1*/}



      <InstitutionLeader/>

      <InstitutionInfo/>

      <ReviewsPhoto/>

      <InstitutionReviews/>

      <NavLink to='/institutionReviews'>
        <button>Смотреть все</button>
      </NavLink>
    </div>
  );
};

export default InstitutionPage;