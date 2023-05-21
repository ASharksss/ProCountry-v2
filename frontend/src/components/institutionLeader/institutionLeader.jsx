import React from 'react';
import './institutionLeader.css'
import avatar from '../../asserts/icons/leader_institute.png'
import answer from '../../asserts/icons/answer.svg'
import {Part} from "../../ui/part/part";
import {Rating} from "../../ui/rating/rating";

const InstitutionLeader = () => {
  return (
    <div className='institutionLeader card'>
       <div className="institutionLeader_info row">
         <img src={avatar} className='institutionLeader_info_img' alt=""/>
         <div className="institutionLeader_info-top">
           <div className="row items-center space-between">
             <h1 className='solid info_title'>Имя Фамилия Отчество</h1>
             <Rating size={'min'}/>
           </div>
           <h2 className='info_job'>Директор школы</h2>
           <Part/>
         </div>
       </div>

      <div className="institutionLeader_education">
        <h2 className='institutionLeader_education-title'>Образование</h2>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Уровень профессионального образования:</p>
          <p className='institutionLeader_education-info'>высшее</p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Обучающая организация:</p>
          <p className='institutionLeader_education-info'>ГАОУ ДПО “Институт развития образования Республики Татарстан</p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Специализация (по диплому):</p>
          <p className='institutionLeader_education-info'>французский и немецкий языки</p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Год завершения обучения:</p>
          <p className='institutionLeader_education-info'>
            данные не предоставлены
            <img className='icon_answer' src={answer} alt=""/>
          </p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Курсы:</p>
          <p className='institutionLeader_education-info'>
            данные не предоставлены
            <img className='icon_answer' src={answer} alt=""/>
          </p>
        </div>
        <div className="row mb-25px space-between">
          <p className='institutionLeader_education-item'>Профессиональная переподготовка по направлению:</p>
          <p className='institutionLeader_education-info'>менеджмент в образовании</p>
        </div>
      </div>

      <div className="institutionLeader_awards">
        <h2 className='institutionLeader_education-title'>Награды</h2>
        <div className="institutionLeader_awards-list">
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
          <p className='institutionLeader_award-item'>1996г. - Нагрудный знак "Отличник народного просвещения".</p>
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