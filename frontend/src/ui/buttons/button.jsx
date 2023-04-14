import React from 'react';
import './button.css'

export const Button = ({text, classname}) => {
  return (
    <button className={'button ' + classname}>
      {text}
    </button>
  );
};

