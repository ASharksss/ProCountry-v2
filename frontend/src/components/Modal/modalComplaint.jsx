import React from 'react';

const ModalComplaint = () => {
	return (
		<div className='supportModal'>
			<h1 className='modal_title'>Пожаловаться</h1>
			<h2 className='modal_subtitle'>Выберите причину жалобы</h2>
			<select className='modal_select'>
				<option>Жалоба</option>
				<option>Жалоба</option>
				<option>Жалоба</option>
				<option>Жалоба</option>
				<option>Жалоба</option>
			</select>
			<h2 className='modal_subtitle'>Другое</h2>
			<textarea className='modal_textarea' cols="30" rows="10" placeholder='Напишите причину жалобы'></textarea>
			<button>Отправить</button>
		</div>
	);
};

export default ModalComplaint;