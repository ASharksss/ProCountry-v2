import React from 'react';
import './leaderCard.css'
import {Rating} from "../../ui/rating/rating";
import leader_avatar from '../../asserts/icons/home/leader_avatar.png'
import {Part} from "../../ui/part/part";

export const LeaderCard = () => {
  return (
    <div className='leader'>
      <div className="leader_info">
        <div className="leader_info-img">
          <img src={leader_avatar} alt=""/>
        </div>
        <div className="leader_info-name">
          <p className='leader_info-fullName'>Имя Фамилия Отчетсво</p>
          <p className='leader_info-job'>Должность</p>
          <div className="leader_info-dop">
            <div className="leader-rating">
              <Rating/>
            </div>
            <div>
              <Part/>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};
