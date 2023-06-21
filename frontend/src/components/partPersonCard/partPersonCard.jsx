import React from 'react';
import './partPersonCard.css'
import leader_avatar from '../../asserts/icons/home/leader_avatar.png'
import {Rating} from "../../ui/rating/rating";
import {NavLink} from "react-router-dom";


const PartPersonCard = ({name, position, id, party_id, rating}) => {
  return (
    <div className='partPerson'>
      <div className="partPerson_avatar">
        <img className="partPerson_avatar-img" src={leader_avatar}/>
      </div>
      <div className="partPerson-info">
        <div className="partPerson-info_name">
          <h1 className='partPerson_name'>{name}</h1>
          <div className="partPerson_rating">
            <Rating size={'min'} rating={rating}/>
          </div>

        </div>
        <p className='partPerson_job'>{position}</p>
        <NavLink to={`/parts/${party_id}/${id}`} className='partPerson_link'>Узнать подробнее</NavLink>
      </div>

    </div>
  );
};

export default PartPersonCard;