import React from 'react';
import './rating.css'
import rating from '../../asserts/icons/home/rating.svg'

export const Rating = ({size}) => {
  return (
    <div className='rating'>
      <img src={rating} alt="" className={'rating_img ' + size}/>
      <p className={size}>96.21%</p>
    </div>
  );
};
