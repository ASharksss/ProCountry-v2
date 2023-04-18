import React from 'react';
import './institutePage.css'
import MinisterCard from "../../components/leaderCard/ministerCard";
import {NavLink} from "react-router-dom";
import InstituteCard from "../../components/categoryCards/instituteCard";

const InstitutePage = ({institute_title}) => {
  return (
    <div className='institute_page'>
      <h1 className='institute_title'>{institute_title}</h1>
      <MinisterCard/>
      <h1 className='institute_subtitle'>Учреждения</h1>
      <div className="categories">
        <div className="category_item">
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Школы'}/></NavLink>
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Детские сады'}/></NavLink>
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Университеты'}/></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Академии'}/></NavLink>
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Техникумы'}/></NavLink>
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Колледжи'}/></NavLink>
        </div>
        <div className="category_item">
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'специальные учебно-воспитательные организации'}/></NavLink>
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Инетрнаты'}/></NavLink>
          <NavLink to='/institute' className='noLink category_card_link'><InstituteCard text={'Другое'}/></NavLink>
        </div>
      </div>
    </div>
  );
};

export default InstitutePage;