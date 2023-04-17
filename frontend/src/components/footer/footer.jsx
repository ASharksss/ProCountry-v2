import React from 'react';
import './footer.css'
import logo from '../../asserts/icons/sidebars/logo.svg'
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <img src={logo} alt="" className='footer_logo'/>
          <div className="footer_links">
            <NavLink to='#' className='footer_link'>Партии</NavLink>
            <NavLink to='#' className='footer_link'>Поддержка</NavLink>
            <NavLink to='#' className='footer_link'>example@mail.ru</NavLink>
          </div>
          <div className="footer_links">
            <NavLink to='#' className='footer_link'>Учреждениям</NavLink>
            <NavLink to='#' className='footer_link'>Партнерам</NavLink>
          </div>
          <div className="footer_links">
            <NavLink to='#' className='footer_link'>Политика конфиденциальности</NavLink>
            <NavLink to='#' className='footer_link'>Правила пользования сайтом</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;