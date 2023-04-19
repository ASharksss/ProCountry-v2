import React from 'react';
import {Rating} from "../../ui/rating/rating";
import PartPerson from "../../components/partPerson/partPerson";

const PartPage = ({text}) => {
  return (
    <div className='partPage'>
      <div className="part_header">
        <h1 className='part_name'>{text}</h1>
        <Rating  size={'max'}/>
      </div>
      <div className="bread_crumb">
        тут хлебные крошки
      </div>
      <h1>Члены политической партии</h1>
      <PartPerson />
    </div>
  );
};

export default PartPage;