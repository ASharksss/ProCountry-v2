import React from 'react';
import './nothing.css'

const Nothing = ({text}) => {
    return (
        <div className='nothing'>
            <p className='nothing_text'>
              {text}
            </p>
        </div>
    );
};

export default Nothing;