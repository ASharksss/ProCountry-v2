import React from 'react';
import closeBtn from "../../asserts/icons/closeBtn.svg";
import user_avatar from "../../asserts/icons/sidebars/user_avatar.png";

const ProfileReviewElement = () => {
  return (
    <div className='ProfileReviewElement-2'>
      <div className="markerCard_header">
        <h1 className='markerCard_header-title'>МБОУ СОШ №114</h1>
      </div>
      <div className="markerCard_body">
        <img src={user_avatar} alt="" className='markerCard_body-user_avatar'/>
        <div className="markerCard_body-text">
          <h2 className='markerCard_body-text_name'>Имя Фамилия</h2>
          <p className='markerCard_body-text_date'>22 апреля, 13:24</p>
          <p className='markerCard_body-text_review'>
            Сказать честно, когда пришли сюда, расстроились с мужем, узнав куда будет
            ходить наш ребёнок! НО, здесь такие прекрасные учителя, что не жалеем ни капли,
            рекомендую школу №21!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileReviewElement;