import React from 'react';
import './errors.css'

const Error500 = () => {
    return (
        <div className='errors'>
            <h1 className='errors_title'>500</h1>
            <p className='errors_subtitle'>OOOPS... Ошибка сервера!!!</p>
        </div>
    );
};

export default Error500;