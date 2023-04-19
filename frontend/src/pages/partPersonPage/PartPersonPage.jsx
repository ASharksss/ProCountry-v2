import React from 'react';
import './partPersonPage.css'
import leader_avatar from "../../asserts/icons/home/leader_avatar.png";
import {Rating} from "../../ui/rating/rating";
import BackBtn from "../../ui/buttons/backBtn/backBtn";

const PartPersonPage = () => {
  return (
    <div className='partPersonPage'>
      <div className="back_btn">
        <BackBtn/>
      </div>
      <div className="bio_card">
        <div className="partPersonPage_header">
          <div className="partPerson_avatar">
            <img className="partPerson_avatar-img" src={leader_avatar}/>
          </div>
          <div className="partPerson-info">
            <div className="partPerson-info_name">
              <h1 className='partPerson_name'>Фамилия Имя Отчетсво</h1>
              <div className="partPerson_rating">
                <Rating size={'min'}/>
              </div>
            </div>
            <p className='partPerson_job'>Мэр города Казани, председатель партии,
              член Федерального политического комитета,член
              Бюро партии, руководитель Единого избирательного штаба партии</p>
          </div>
        </div>
        <div className="partPerson_bio">
          <h1 className='bio_title'>Биография</h1>
          <p className='bio_p'>Глава муниципального образования - Мэр города Казани Родился 24 апреля
            1969 года в городе Нижнекамск Татарской АССР Образование высшее
            В 1992 году окончил Казанский государственный университет по специальности
            «Юриспруденция» Кандидат юридических наук</p>
          <h1 className='bio_title'>Трудовая деятельность</h1>
          <p className='bio_p'>1993 - 1995 гг. - Заведующий агентством по приватизации жилья администрации
            Советского района г. Казани</p>
          <p className='bio_p'>1993 - 1995 гг. - Заведующий агентством по приватизации жилья администрации
            Советского района г. Казани</p>
          <p className='bio_p'>1993 - 1995 гг. - Заведующий агентством по приватизации жилья администрации
            Советского района г. Казани</p>
          <p className='bio_p'>1993 - 1995 гг. - Заведующий агентством по приватизации жилья администрации
            Советского района г. Казани</p>
          <p className='bio_p'>1993 - 1995 гг. - Заведующий агентством по приватизации жилья администрации
            Советского района г. Казани</p>
          <p className='bio_p'>1993 - 1995 гг. - Заведующий агентством по приватизации жилья администрации
            Советского района г. Казани</p>
        </div>

      </div>
    </div>

  )
};

export default PartPersonPage;