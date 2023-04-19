import React from 'react';
import './notification.css'
import instituteAvatar from  '../../asserts/icons/instituteAvatart.svg'

const NotificationAnswer = () => {
  return (
    <div className='answer'>
      <div className="answer_decr">
        <div className="answer_avatar">
          <img src={instituteAvatar} alt=""/>
        </div>
        <div className="answer_info">
          <h1>МБОУ СОШ №114</h1>
          <div className="notification_date">
            19 апреля 16:20
          </div>
          <div className="answer_text">
            Спасибо за обратную связь!
          </div>
        </div>
      </div>


    </div>
  );
};

export default NotificationAnswer;