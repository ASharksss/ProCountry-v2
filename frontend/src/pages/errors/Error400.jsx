import React from 'react';
import './errors.css'

const Error400 = () => {
    return (
        <div className='errors'>
            <h1 className='errors_title'>404</h1>
            <p className='errors_subtitle'>OOOPS... Страница не найдена!!!</p>
        </div>
    );
};

export default Error400;