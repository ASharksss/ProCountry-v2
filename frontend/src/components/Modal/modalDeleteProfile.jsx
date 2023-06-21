import React from 'react';

const ModalDeleteProfile = () => {
	return (
		<div className='supportModal'>
			<h1 className='modal_title'>О нет...</h1>
			<h2 className='modal_subtitleDelete'>Вы уверены, что хотите удалить профиль?</h2>
			<button>Да</button>
			<button>Нет</button>
		</div>
	);
};

export default ModalDeleteProfile;