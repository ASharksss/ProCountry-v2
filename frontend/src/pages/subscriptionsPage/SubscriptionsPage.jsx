import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './subscriptionsPage.css'
import SubscriptionCard from "../../components/subscriptionCard/SubscriptionCard";
import Nothing from "../../components/nothing/Nothing";
import { fetchUserSubscriptions } from '../../logic/slices/userInfoSlice';
import { hidePreloader, showPreloader } from '../../logic/slices/otherSlice';

const SubscriptionsPage = () => {
    const dispatch = useDispatch()
    const { subscriptions } = useSelector(state => state.userInfo)
    const isLoading = subscriptions.status === 'loaded'

    const getSubscriptions = async () => {
        const request = await dispatch(fetchUserSubscriptions())
        if (request) {
            hidePreloader()
        }
    }

    useEffect(() => {
        showPreloader()
        getSubscriptions()
    }, [])

    return (
        <div className='subscriptions'>
            <h1 className='subscriptions_title'>Мои подписки</h1>
            <h2 className='subscriptions_subtitle'>Ваши текущие подписки</h2>
            <div className="subscriptions-items">
                {isLoading && subscriptions.items.length > 0 ?
                    subscriptions.items.map((item, index) =>
                        <SubscriptionCard key={index} leader_name={item.institution.leader.name} name={item.institution.name}
                            rating={item.institution.rating} leader_position={item.institution.leader.position} id={item.id}
                            subcatId={item.institution.subcategory.id} instId={item.institution.id} address={item.institution.full_address} />
                    )
                    : <Nothing text={"Пока ничего нет"} />}
            </div>
        </div>
    );
};

export default SubscriptionsPage;