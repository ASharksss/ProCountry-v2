import React from 'react';
import './categoryCard.css'
import CategoryRating from "../../ui/categoryRating/categoryRating";

const CategoryCard = ({text, classname, percentage}) => {
  return (
    <div className={'category_card ' + classname}>
      <div className="category_card_content">
        <p className='category_name'>{text}</p>
        <CategoryRating percentage={percentage}/>
      </div>
    </div>
  );
};

export default CategoryCard;