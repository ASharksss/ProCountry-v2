import React from 'react';
import './backBtn.css'
import {NavLink, useNavigate} from "react-router-dom";
import back from '../../../asserts/icons/back.svg'

const BackBtn = () => {
    const navigation = useNavigate()
    return (
        <NavLink to='#' className='backBtn'>
            <button onClick={() => navigation(-1)} className='noBtn backBtn_btn'>
                <img className='backBtn_icon' src={back} alt=""/>
                <span className='backBtn_text'>Назад</span>
            </button>
        </NavLink>
    );
};

export default BackBtn;