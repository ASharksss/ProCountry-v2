import React from 'react';
import './institutionInfo.css'
import SliderShow from "../slider/slider";
import answer from "../../asserts/icons/answer.svg";

const InstitutionInfo = ({full_name, address, telNumber, email, leader}) => {
	return (
		<div className='institutionInfo row'>
			<div className="institutionInfo__slider">
				<SliderShow/>
			</div>
			<div className="institutionInfo__info">

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Полное название:</p>
					<p className='institutionLeader_education-info'>{full_name}</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Адрес:</p>
					<p className='institutionLeader_education-info'>{address}</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Телефон:</p>
					<p className='institutionLeader_education-info'>{telNumber}</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Почта:</p>
					<p className='institutionLeader_education-info'>{email}</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Сайт:</p>
					<p className='institutionLeader_education-info'>
						данные не предоставлены
						<img className='icon_answer' src={answer} alt=""/>
					</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Руководитель:</p>
					<p className='institutionLeader_education-info'>{leader}</p>
				</div>
			</div>
		</div>
	);
};

export default InstitutionInfo;