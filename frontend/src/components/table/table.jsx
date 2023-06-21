import React from 'react';
import './table.css'
import { Rating } from "../../ui/rating/rating";
import { NavLink } from "react-router-dom";

const Table = ({ path, data }) => {
  return (
    <div className='table-wrapper'>
      <table cellSpacing='0'>
        <thead>
          <tr className='thead'>
            <th className='align-left'>Наименование</th>
            <th className='align-center'>ФИО главы</th>
            <th className='align-right'>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className='table_row' key={index}>
              <td className='bold align-left'><NavLink to={item.id} className='solid noLink color-black'>{item.name}</NavLink></td>
              <td className='align-center'>{item.leader.name}</td>
              <td className='align-right td_rating'><Rating size={'min'} rating={item.rating} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;