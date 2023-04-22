import React from 'react';
import './subscriptionCard.css'
import {Rating} from "../../ui/rating/rating";
import leader_avatar from '../../asserts/icons/leader_institute.png'
import {NavLink} from "react-router-dom";

const SubscriptionCard = () => {
    return (
        <div className='subscriptionCard'>
            <div className="subscriptionCard_header">
                <h1>Название учреждения</h1>
                <div className="subscriptionCard_rating">
                    <Rating size={'min'}/>
                </div>
            </div>
            <div className="subscriptionCard_leader">
                <img src={leader_avatar} className='subscriptionCard_leader_avatar'/>
                <div className="subscriptionCard_leader_info">
                    <div className="leader_info-header">
                        <h2>Баклашова Ольга Николаевна</h2>
                        <p>Должность</p>
                    </div>
                    <div className="leader_info-footer">
                            <h3>Адрес:</h3>
                            <p className='leader_info-footer-address'>420139, г. Казань, ул. Ю.Фучика, д. 26</p>
                        <NavLink to='/institute/institutePage' className='partPerson_link subscriptionCard_text'>Узнать подробнее</NavLink>
                        <button>Отписаться</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;