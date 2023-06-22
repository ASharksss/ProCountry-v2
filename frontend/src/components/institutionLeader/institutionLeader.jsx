import React from 'react';
import './institutionLeader.css'
import avatar from '../../asserts/icons/leader_institute.png'
import answer from '../../asserts/icons/answer.svg'
import {Part} from "../../ui/part/part";
import {Rating} from "../../ui/rating/rating";

const InstitutionLeader = ({leader, leaderInfo}) => {
  return (
    <div className='institutionLeader card'>
       <div className="institutionLeader_info row">
         <img src={avatar} className='institutionLeader_info_img' alt=""/>
         <div className="institutionLeader_info-top">
           <div className="row items-center space-between">
             <h1 className='solid info_title'>{leader.name}</h1>
             <Rating size={'min'} rating={leader.rating} />
           </div>
           <h2 className='info_job'>{leader.position}</h2>
           <Part name={leader.party} party_id={leader.party_id} />
         </div>
       </div>

      <div className="institutionLeader_education">
        <h2 className='institutionLeader_education-title'>Образование</h2>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Уровень профессионального образования:</p>
          <p className='institutionLeader_education-info'>{leaderInfo.study_lvl}</p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Обучающая организация:</p>
          <p className='institutionLeader_education-info'>{leaderInfo.learning_organization}</p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Специализация (по диплому):</p>
          <p className='institutionLeader_education-info'>{leaderInfo.specialization_by_diploma}</p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Год завершения обучения:</p>
          <p className='institutionLeader_education-info'>
            {leaderInfo.study_end_date}
            <img className='icon_answer' src={answer} alt=""/>
          </p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Курсы:</p>
          <p className='institutionLeader_education-info'>
            {leaderInfo.courses}
            <img className='icon_answer' src={answer} alt=""/>
          </p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Профессиональная переподготовка по направлению:</p>
          <p className='institutionLeader_education-info'>{leaderInfo.retraining}</p>
        </div>
      </div>

      <div className="institutionLeader_awards">
        <h2 className='institutionLeader_education-title'>Награды</h2>
        <div className="institutionLeader_awards-list">
          {JSON.parse(leaderInfo.awards).map((item, index) => (
            <p className='institutionLeader_award-item' key={index}>{item}</p>
          ))}
        </div>
      </div>

      <div className="institutionLeader_social-media">
        <h2 className='institutionLeader_education-title'>Социальные сети</h2>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-info'>
            данные не предоставлены
            <img className='icon_answer' src={answer} alt=""/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionLeader;