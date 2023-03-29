import React from 'react';
import './leftSidebar.css'

import logo from '../../asserts/icons/sidebars/logo.svg'
import home from '../../asserts/icons/sidebars/home.svg'
import part from '../../asserts/icons/sidebars/part.svg'
import notice from '../../asserts/icons/sidebars/notice.svg'
import subscribtion from '../../asserts/icons/sidebars/subscribtion.svg'
import tab from '../../asserts/icons/sidebars/tab.svg'
import heart from '../../asserts/icons/sidebars/heart.svg'
import support from '../../asserts/icons/sidebars/support.svg'

import {NavLink} from 'react-router-dom'

export const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <div className="sidebar_content">
        <div className="sidebar_logo">
          <img src={logo} alt=""/>
        </div>
        <div className="sidebar_menu">
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={home} alt="" className="sidebar_menu-icon"/>
            <p>Главная</p>
          </a>
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={part} alt="" className="sidebar_menu-icon"/>
            <p>Партии</p>
          </a>
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={notice} alt="" className="sidebar_menu-icon"/>
            <p>Уведомления</p>
          </a>
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={subscribtion} alt="" className="sidebar_menu-icon"/>
            <p>Подписки</p>
          </a>
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={tab} alt="" className="sidebar_menu-icon"/>
            <p>Закладки</p>
          </a>
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={heart} alt="" className="sidebar_menu-icon"/>
            <p>Мне понравилось</p>
          </a>
          <a href='frontend/src/components/leftSidebar/leftSidebar#' className='link sidebar_menu-item'>
            <img src={support} alt="" className="sidebar_menu-icon"/>
            <p>Поддержка</p>
          </a>
        </div>
      </div>
    </div>
  )
};

