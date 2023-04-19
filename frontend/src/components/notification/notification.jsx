import React from 'react';
import './notification.css'
import user_avatar from './../../asserts/icons/sidebars/user_avatar.png'
import NotificationAnswer from "./notificationAnswer";


const Notification = ({theme, nameInstitute, classname}) => {
  return (
    <div className={'notification ' + classname }>
      <div className="notification_theme">
        <h1>{theme}</h1>
      </div>
      <div className="notification_nameInstitute">
        <h1>{nameInstitute}</h1>
      </div>
      <div className="notification_userReview">
        <div className="notification_user-img">
          <img src={user_avatar} alt=""/>
        </div>
        <div className="notification_user-info">
          <div className="notification_username">
            Фамилия Имя
          </div>
          <div className="notification_date">
            19 апреля 15:54
          </div>
          <div className="notification_textReview">
            <p>Сказать честно, когда пришли сюда, расстроились с мужем, узнав куда будет ходить наш ребёнок!
              НО, здесь такие прекрасные учителя, что не жалеем ни капли, рекомендую школу №21!!!</p>
          </div>
        </div>
      </div>
      <NotificationAnswer/>
    </div>
  );
};

export default Notification;