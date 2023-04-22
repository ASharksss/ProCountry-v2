import React from 'react';
import './supportPage.css'
import SupportCard from "../../components/supportCard/supportCard";


const SupportPage = () => {
    return (
        <div>
            <div className="supportPage">
                <div className="supportPage_header">
                    <div className="supportPage_header-top">
                        <h1 className='supportPage_header-title'>Поддержка</h1>
                        <button>Задать вопрос</button>
                    </div>
                    <div className="supportPage_header-bottom">
                        <h2 className='supportPage_header-subtitle'>Ожидание ответа от технической поддержки</h2>
                    </div>
                    <SupportCard/>
                    <SupportCard/>
                    <SupportCard/>
                    <SupportCard/>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;