import React from 'react';
import './part.css'
import part_icon from '../../asserts/icons/home/part_icon.svg'

export const Part = () => {
  return (
    <div className='part'>
      <img src={part_icon} alt="Название партии" className='part_img'/>
      <p>Единая Россия</p>
    </div>
  );
};
