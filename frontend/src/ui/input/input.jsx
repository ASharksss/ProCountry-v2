import React from 'react';
import './input.css'

const Input = ({label_text, placeholder_text}) => {
  return (
      <div className="row">
        <label>{label_text}</label>
        <input type="text" className='input' placeholder={placeholder_text}/>
      </div>
  );
};

export default Input;