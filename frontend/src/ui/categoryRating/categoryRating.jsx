import React from 'react';
import './category_rating.css'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CategoryRating = ({percentage=48.35}) => {
  return (
    <div className='category_rating'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          trailColor: 'transparent',
          pathColor: 'linear-gradient(90deg, rgba(8,65,187,1) 51%, rgba(18,211,193,1) 100%',
          textColor: 'black',
          textSize: '20px',
        })}
      />
    </div>
  );
};

export default CategoryRating;