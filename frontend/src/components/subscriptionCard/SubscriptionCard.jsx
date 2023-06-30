import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import './subscriptionCard.css'
import { Rating } from "../../ui/rating/rating";
import leader_avatar from '../../asserts/icons/leader_institute.png'
import { fetchUserUnsubscribe } from '../../logic/slices/userInfoSlice';
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';

const SubscriptionCard = ({ id, instId, subcatId, name, rating, leader_name, leader_position, address }) => {
    const dispatch = useDispatch()

    const handleUnsubscribe = async () => {
        const check = window.confirm('Вы действительно уверены что хотите отписаться?')
        if (check) {
            showPreloader()
            const request = await dispatch(fetchUserUnsubscribe(id))
            if (request) {
                hidePreloader()
            }
        }
    }

    return (
        <div className='subscriptionCard'>
            <div className="subscriptionCard_header">
                <h1>{name}</h1>
                <div className="subscriptionCard_rating">
                    <Rating size={'min'} rating={rating} />
                </div>
            </div>
            <div className="subscriptionCard_leader">
                <img src={leader_avatar} className='subscriptionCard_leader_avatar' />
                <div className="subscriptionCard_leader_info">
                    <div className="leader_info-header">
                        <h2>{leader_name}</h2>
                        <p>{leader_position}</p>
                    </div>
                    <div className="leader_info-footer">
                        <h3>Адрес:</h3>
                        <p className='leader_info-footer-address'>{address}</p>
                        <NavLink to={`/institutes/${subcatId}/${instId}`} className='partPerson_link subscriptionCard_text'>Узнать подробнее</NavLink>
                        <button onClick={() => handleUnsubscribe()}>Отписаться</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;