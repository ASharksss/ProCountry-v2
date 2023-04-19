import React from 'react';
import './partPersonCard.css'
import leader_avatar from '../../asserts/icons/home/leader_avatar.png'
import {Rating} from "../../ui/rating/rating";
import {NavLink} from "react-router-dom";


const PartPersonCard = () => {
  return (
    <div className='partPerson'>
      <div className="partPerson_avatar">
        <img className="partPerson_avatar-img" src={leader_avatar}/>
      </div>
      <div className="partPerson-info">
        <div className="partPerson-info_name">
          <h1 className='partPerson_name'>Фамилия Имя Отчетсво</h1>
          <div className="partPerson_rating">
            <Rating size={'min'} />
          </div>

        </div>
        <p className='partPerson_job'>Мэр города Казани, председатель партии,
          член Федерального политического комитета,член
          Бюро партии, руководитель Единого избирательного штаба партии</p>
        <NavLink to='/parts/partPage/partPerson' className='partPerson_link'>Узнать подробнее</NavLink>
      </div>

    </div>
  );
};

export default PartPersonCard;