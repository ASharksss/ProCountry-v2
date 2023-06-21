import React from 'react';
import './modal.css'

const SupportModal = () => {
	return (
		<div className='supportModal'>
			<h1 className='modal_title'>Помогите разобраться...</h1>
			<h2 className='modal_subtitle'>Напишите причину обращения</h2>
			<textarea className='modal_textarea' cols="30" rows="10" placeholder='Напишите причину обращения'></textarea>
			<button>Отправить</button>
		</div>
	);
};

export default SupportModal;