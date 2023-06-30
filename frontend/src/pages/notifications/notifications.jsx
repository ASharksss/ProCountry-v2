import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './notifications.css'
import Notification from "../../components/notification/notification";

const Notifications = () => {
  const {isAuth} = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuth) {
      navigate('/form/login')
    }
  }, [])
  return (
    <div className='notifications'>
      <div className="notifications_header">
        <h1 className='notifications_title'>Уведомления</h1>
        <button className='noBtn notifications_btn'>
          Очитсить всё
        </button>
      </div>

      <Notification nameInstitute={'МБОУ СОШ №114'} theme={'Вы получили ответ!'} classname={'simple'} />
      <Notification nameInstitute={'МБОУ СОШ №114'} theme={'Предупреждение!'} classname={'danger'} />
      <Notification nameInstitute={'МБОУ СОШ №114'} theme={'Ваш отзыв понравился!'} classname={'simple'} />
      <Notification nameInstitute={'МБОУ СОШ №114'} theme={'Ваш отзыв не понравился!'} classname={'simple'} />
    </div>
  );
};

export default Notifications;