import React from 'react';
import './institutionInfo.css'
import SliderShow from "../slider/slider";
import answer from "../../asserts/icons/answer.svg";

const InstitutionInfo = () => {
	return (
		<div className='institutionInfo row'>
			<div className="institutionInfo__slider">
				<SliderShow/>
			</div>
			<div className="institutionInfo__info">

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Полное название:</p>
					<p className='institutionLeader_education-info'>Муниципальное бюджетное общеобразовательное учреждение “Средняя общеобразовательная школа №21</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Адрес:</p>
					<p className='institutionLeader_education-info'>420139, г. Казань, ул. Ю.Фучика, д. 26</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Телефон:</p>
					<p className='institutionLeader_education-info'>+7(843)-268-08-77</p>
				</div>

				<div className="row mb-25px space-between">
					<p className='institutionLeader_education-item'>Почта:</p>
					<p className='institutionLeader_education-info'>gymn06@yandex.ru, G6.kzn@tatar.ru</p>
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
					<p className='institutionLeader_education-info'>Баклашова Ольга Николаевна</p>
				</div>
			</div>
		</div>
	);
};

export default InstitutionInfo;