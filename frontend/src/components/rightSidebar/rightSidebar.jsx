import React from 'react';
import { useSelector } from 'react-redux';
import user_avatar from './../../asserts/icons/sidebars/user_avatar.png'
import scroll_down from './../../asserts/icons/sidebars/scroll_down.svg'
import './rightSidebar.css'
import { Search } from "../../ui/search/search";
import { Select } from "../../ui/selects/select";


export const RightSidebar = () => {
  const { user, isAuth } = useSelector(state => state.user)
  return (
    <div className='right-sidebar'>
      <Search />
      <div className="user_block">
        {isAuth && <>
          <img src={user_avatar} alt="" className="user_img" />
          <p>{user.items['name']} {user.items['surname']}</p>
          <img src={scroll_down} alt="" className='user_scroll-down' />
        </>}
      </div>
      <div className="sidebar_geo-nav">
        <div className="sidebar_select">
          <Select />
        </div>
        <div className="sidebar_select">
          <Select />
        </div>
        <div className="sidebar_select">
          <Select />
        </div>
        <div className="sidebar_select">
          <Select />
        </div>
      </div>
    </div>
  );
};

