import React from 'react';
import './rating.css'
import rating from '../../asserts/icons/home/rating.svg'

export const Rating = () => {
  return (
    <div className='rating'>
      <img src={rating} alt=""/>
      <p className='count'>98.23%</p>
    </div>
  );
};
