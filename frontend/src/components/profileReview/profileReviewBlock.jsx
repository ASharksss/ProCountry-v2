import React from 'react';
import './review.css'
import ProfileReviewElement from "./profileReviewElement";

const ProfileReviewBlock = () => {
  return (
    <div className='profileReview'>
      <h1 className='profileReview_title'>Оценки (3)</h1>
      <div className="profileReviewBlock">
        <div className="profileReviewElement">
          <ProfileReviewElement/>
        </div>
        <div className="profileReviewElement">
          <ProfileReviewElement/>
        </div>
        <div className="profileReviewElement">
          <ProfileReviewElement/>
        </div>


      </div>
    </div>
  );
};

export default ProfileReviewBlock;