import React from 'react';
import avatar from '../../asserts/icons/leader_institute.png'

const InstitutionLeader = () => {
  return (
    <div className='institutionLeader'>
       <div className="institutionLeader_info">
         <img src={avatar} alt=""/>
         <div className="institutionLeader_info-top">
           <h1>Имя Фамилия Отчество</h1>

         </div>

       </div>
    </div>
  );
};

export default InstitutionLeader;