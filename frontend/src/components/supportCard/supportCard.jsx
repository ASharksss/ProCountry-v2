import React from 'react';
import './supportCard.css'
import support_avatar from '../../asserts/icons/support_avatar.svg'

const SupportCard = () => {
    return (
        <div className='supportCard'>
            <div className="supportCard_date">
                <p>22 апреля, 20:11</p>
               <p className='supportCard_askBtn partPerson_link solid'>Удалить</p>
            </div>
            <div className="supportCard_question">
                <p className='supportCard_question-text'>Добрый день! Где можно посмотреть список всех партий?</p>
            </div>
            <div className="supportCard_answer">
                <img src={support_avatar} alt=""/>
                <div className="supportCard_answer-info">
                    <h1 className='supportCard_answer-info_title'>Техническая поддержка</h1>
                    <p className='supportCard_answer-info_date' >22 апреля, 20:27</p>
                    <p className='supportCard_answer-info_text' >
                        Список всех партий открывается при нажатии “Партии”
                        в футоре страницы
                    </p>
                </div>
            </div>
        </div>

    );
};

export default SupportCard;