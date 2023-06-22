import React from 'react';
import './part.css'
import part_icon from '../../asserts/icons/home/part_icon.svg'
import {NavLink} from "react-router-dom";

export const Part = ({name, party_id}) => {
  return (
    <NavLink to={'/parts/' + party_id} className='part noLink'>
      <img src={part_icon} alt="Название партии" className='part_img'/>
      <p>{name}</p>
    </NavLink>
  );
};
