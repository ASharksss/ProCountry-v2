import React from 'react';
import reviewPhoto from "../../asserts/reviewPhoto.png";
import './ReviewsPhoto.css'

const ReviewPhoto = () => {
  return (
    <div className="reviewsPhoto_imgBlock">
      <img src={reviewPhoto}/>
    </div>
  );
};

export default ReviewPhoto;