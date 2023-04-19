import React from 'react';
import './backBtn.css'
import {NavLink} from "react-router-dom";
import back from '../../../asserts/icons/back.svg'

const BackBtn = () => {
  return (
    <NavLink to='/' className='backBtn'>
        <button className='noBtn backBtn_btn'>
          <img  className='backBtn_icon' src={back} alt=""/>
          <span className='backBtn_text'>Назад</span>
        </button>
    </NavLink>
  );
};

export default BackBtn;