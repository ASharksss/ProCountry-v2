import React from 'react';
import star from '../../asserts/icons/star.svg'
import './input.css'

const Input = ({input_label, input_content, size, input_placeholder}) => {
  return (
    <div className="input">
      <label className='input_label'>{input_label}</label>
      <div className={'input_field ' + size}>
        <input className={'input_field-area ' + size} placeholder={input_placeholder}/>
        <p className="input_field-content">{input_content}</p>
        <img src={star} className='input_star'/>
      </div>
    </div>
  );
};

export default Input;