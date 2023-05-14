import React from 'react';
import Input from "../../../ui/input/input";

const RecoveryCodePage = ({form_title}) => {
	return (
		<div className='formRecoveryPassword'>
			<h1 className='form_title'>{form_title}</h1>
			<p className='form_subtitle'>Пожалуйста, проверьте электронную почту и введите код подтверждения</p>
			<div className="row space-between">
				<Input size={'extra-small'}/>
				<Input size={'extra-small'}/>
				<Input size={'extra-small'}/>
				<Input size={'extra-small'}/>
			</div>
			<div className="send_again row">
				<p className='send_again-text'>Отправить еще раз</p>
				<p className='send_again-timer'>1:03</p>
			</div>
			<button>Подтвердить</button>
		</div>
	);
};

export default RecoveryCodePage;