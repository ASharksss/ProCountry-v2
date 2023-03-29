import React from 'react';
import './leaderCard.css'
import {Rating} from "../../ui/rating/rating";
import leader_avatar from '../../asserts/icons/home/leader_avatar.png'

export const LeaderCard = () => {
  return (
    <div className='leader'>
      <div className="leader_info">
        <div className="leader_info-img">
          <img src={leader_avatar} alt=""/>
        </div>
        <div className="leader_info-name">
          <p>Имя Фамилия Отчетсво</p>
          <p>Должность</p>
          <div className="leader_info-dop">
          <div className="rating">
            <Rating/>
          </div>
          <div className="part">
            единая Россия
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
