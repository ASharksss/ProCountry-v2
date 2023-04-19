import React from 'react';
import './part.css'
import part_icon from '../../asserts/icons/home/part_icon.svg'
import {NavLink} from "react-router-dom";

export const Part = () => {
  return (
    <NavLink to='/parts/partPage' className='part noLink'>
      <img src={part_icon} alt="Название партии" className='part_img'/>
      <p>Единая Россия</p>
    </NavLink>
  );
};
