import React from 'react';
import './markerPage.css'
import MarkerCard from "../../components/markerCard/markerCard";

const MarkerPage = () => {
    return (
        <div>
            <div className="markerPage">
                <h1 className='markerPage_title'>Закладки</h1>
                <h1 className='markerPage_subtitle'>Ожидание ответа на отзыв</h1>
                <MarkerCard/>
                <MarkerCard/>
                <MarkerCard/>
                <MarkerCard/>
            </div>
        </div>
    );
};

export default MarkerPage;