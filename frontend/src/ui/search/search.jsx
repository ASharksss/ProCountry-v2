import React from 'react';
import './search.css'
import search_icon from './../../asserts/icons/sidebars/search.svg'

export const Search = () => {
  return (
    <div className='search'>
      <img src={search_icon} alt="" className="search_icon"/>
      <input type="text" placeholder='Поиск по всей России' className='search_input'/>
    </div>
  );
};
