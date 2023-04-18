import React from 'react';
import './instituteCard.css'

const InstituteCard = ({text}) => {
  return (
    <div className={'institute_card '}>
        <p className='institute_name'>{text}</p>
    </div>
  );
};

export default InstituteCard;