import React from 'react';
import ReviewPhoto from "./ReviewPhoto";
import './ReviewsPhoto.css'

const ReviewsPhoto = () => {
  return (
    <div className='reviewsPhoto'>
      <div className="reviewsPhoto_header">
        <h1 className='reviewsPhoto_header-title'>Отзывы</h1>
        <h2 className='reviewsPhoto_header-subtitle'>Фотографии пользователей</h2>
      </div>
      <div className="row reviewsPhoto_block">
        <ReviewPhoto/>
        <ReviewPhoto/>
        <ReviewPhoto/>
        <ReviewPhoto/>
        <ReviewPhoto/>
        <ReviewPhoto/>
      </div>
    </div>
  );
};

export default ReviewsPhoto;