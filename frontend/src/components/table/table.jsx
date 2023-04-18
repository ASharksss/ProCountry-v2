import React from 'react';
import './table.css'
import {Rating} from "../../ui/rating/rating";
import {NavLink} from "react-router-dom";

const Table = ({path}) => {
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
          <tr className='table_row'>
            <td className='bold align-left'><NavLink to={path} className='solid noLink color-black'>Текст</NavLink></td>
            <td className='align-center'>Иванов Иван Иванович</td>
            <td className='align-right'><Rating/></td>
          </tr>
          <tr className='table_row'>
            <td className='bold align-left'><NavLink to={path} className='solid noLink color-black'>Текст</NavLink></td>
            <td className='align-center'>Иванов Иван Иванович</td>
            <td className='align-right'><Rating/></td>
          </tr>
          <tr className='table_row'>
            <td className='bold align-left'><NavLink to={path} className='solid noLink color-black'>Текст</NavLink></td>
            <td className='align-center'>Иванов Иван Иванович</td>
            <td className='align-right'><Rating/></td>
          </tr>
          <tr className='table_row'>
            <td className='bold align-left'><NavLink to={path} className='solid noLink color-black'>Текст</NavLink></td>
            <td className='align-center'>Иванов Иван Иванович</td>
            <td className='align-right'><Rating/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;