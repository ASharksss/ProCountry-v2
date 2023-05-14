import React from 'react';
import user_avatar from './../../asserts/icons/sidebars/user_avatar.png'
import scroll_down from './../../asserts/icons/sidebars/scroll_down.svg'
import './rightSidebar.css'
import {Search} from "../../ui/search/search";
import {Select} from "../../ui/selects/select";


export const RightSidebar = () => {
  return (
    <div className='right-sidebar'>
      <Search/>
      <div className="user_block">
        <img src={user_avatar} alt="" className="user_img"/>
        <p>Имя Фамилия</p>
        <img src={scroll_down} alt="" className='user_scroll-down'/>
      </div>
      <div className="sidebar_geo-nav">
        <div className="sidebar_select">
          <Select/>
        </div>
        <div className="sidebar_select">
          <Select/>
        </div>
        <div className="sidebar_select">
          <Select/>
        </div>
        <div className="sidebar_select">
          <Select/>
        </div>
      </div>
    </div>
  );
};

