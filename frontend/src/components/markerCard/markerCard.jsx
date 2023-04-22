import React from 'react';
import './markerCard.css'
import user_avatar from './../../asserts/icons/sidebars/user_avatar.png'
import closeBtn from '../../asserts/icons/closeBtn.svg'

const MarkerCard = () => {
    return (
        <div className='markerCard'>
            <div className="markerCard_header">
                <h1 className='markerCard_header-title'>Название учреждения</h1>
                <button className='noBtn'>
                    <img src={closeBtn} alt=""/>
                </button>
            </div>
            <div className="markerCard_body">
                <img src={user_avatar} alt="" className='markerCard_body-user_avatar'/>
                <div className="markerCard_body-text">
                    <h2 className='markerCard_body-text_name'>Имя Фамилия</h2>
                    <p className='markerCard_body-text_date'>22 апреля, 13:24</p>
                    <p className='markerCard_body-text_review'>
                        Сказать честно, когда пришли сюда, расстроились с мужем, узнав куда будет
                        ходить наш ребёнок! НО, здесь такие прекрасные учителя, что не жалеем ни капли,
                        рекомендую школу №21!!!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MarkerCard;