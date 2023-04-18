import React from 'react';
import './table.css'
import {Rating} from "../../ui/rating/rating";

const Table = () => {
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
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        <tr className='table_row'>
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        <tr className='table_row'>
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        <tr className='table_row'>
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        <tr className='table_row'>
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        <tr className='table_row'>
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        <tr className='table_row'>
          <td className='bold align-left'><span className='solid'>Текст</span></td>
          <td className='align-center'>Иван Иван Иванович</td>
          <td className='align-right'><Rating/></td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;