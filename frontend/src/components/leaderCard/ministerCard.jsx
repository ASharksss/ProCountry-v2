import React from 'react';
import './ministerCard.css'
import minister_avatar from "../../asserts/icons/home/minister_avatar.png";
import {Rating} from "../../ui/rating/rating";
import {Part} from "../../ui/part/part";

const MinisterCard = () => {
  return (
    <div className='minister_card'>
      <div className="minister_info">
        <div className="minister_info-img">
          <img src={minister_avatar} alt="" className='minster_img'/>
        </div>
        <div className="minister_info-name">
          <p className='minister_info-fullName'>Имя Фамилия Отчетсво</p>
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

export default MinisterCard;