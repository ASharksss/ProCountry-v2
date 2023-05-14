import React from 'react';
import Input from "../../../ui/input/input";

const RecoveryEmailPage = ({form_title}) => {
	return (
		<div className='formRecoveryPassword'>
			<h1 className='form_title'>{form_title}</h1>
			<p className='form_subtitle'>Введите адрес электронной почты для получение одноразового кода</p>
			<Input size={'large'} input_placeholder={'Почта'} input_label={'Почта'}/>
			<button>Отправить код</button>
		</div>
	);
};

export default RecoveryEmailPage;