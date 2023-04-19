import React from 'react';
import './partPage.css'
import {Rating} from "../../ui/rating/rating";
import PartPersonCard from "../../components/partPersonCard/partPersonCard";

const PartPage = ({text}) => {
  return (
    <div className='partPage'>
      <div className="part_header">
        <h1 className='part_name'>{text}</h1>
        <div className="part_rating">
          <Rating  size={'max'}/>
        </div>

      </div>
      <div className="bread_crumb">
        тут хлебные крошки
      </div>
      <h1 className='partPage_title'>Члены политической партии</h1>
      <PartPersonCard />
      <PartPersonCard />
      <PartPersonCard />
      <PartPersonCard />
      <PartPersonCard />
      <PartPersonCard />
    </div>
  );
};

export default PartPage;