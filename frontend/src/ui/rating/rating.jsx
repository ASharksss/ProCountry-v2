import React from 'react';
import './rating.css'
import rating from '../../asserts/icons/home/rating.svg'

export const Rating = () => {
  return (
    <div className='rating'>
      <img src={rating} alt="" className='rating_img'/>
      <p className='rating_count'>96.21%</p>
    </div>
  );
};
