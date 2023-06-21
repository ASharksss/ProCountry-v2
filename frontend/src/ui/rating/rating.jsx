import React from 'react';
import './rating.css'
import ratingImg from '../../asserts/icons/home/rating.svg'

export const Rating = ({size, rating=90}) => {
  return (
    <div className='rating'>
      <img src={ratingImg} alt="" className={'rating_img ' + size}/>
      <p className={size}>{parseFloat(rating).toFixed(2)}%</p>
    </div>
  );
};
