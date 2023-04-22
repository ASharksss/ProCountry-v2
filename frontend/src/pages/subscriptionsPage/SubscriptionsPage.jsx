import React from 'react';
import './subscriptionsPage.css'
import SubscriptionCard from "../../components/subscriptionCard/SubscriptionCard";

const SubscriptionsPage = () => {
    return (
        <div className='subscriptions'>
            <h1 className='subscriptions_title'>Мои подписки</h1>
            <h2 className='subscriptions_subtitle'>Ваши текущие подписки</h2>
            <div className="subscriptions-items">
                <SubscriptionCard/>
                <SubscriptionCard/>
                <SubscriptionCard/>
                <SubscriptionCard/>
            </div>
        </div>
    );
};

export default SubscriptionsPage;