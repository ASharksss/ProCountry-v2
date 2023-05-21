import React from 'react';
import '../form.css'
import Input from "../../../ui/input/input";
import InputPassword from "../../../ui/input/inputPassword";
import WarningText from "../../../ui/warning/warningText";

const RecoveryNewPassword = ({form_title}) => {
	return (
		<div className='formRecoveryNewPassword'>
			<h1 className='form_title'>{form_title}</h1>
			<p className='form_subtitle'>Придумайте новый пароль для входа</p>
			<div>
				<div className="form_input">
					<InputPassword size={'large'} input_label={'Новый пароль'} state={'usually'}/>
				</div>
				<div className="form_input">
					<InputPassword size={'large'} input_label={'Новый пароль еще раз'} state={'usually'}/>
				</div>
				{/*<div className="form_input">
					<InputPassword size={'large'} input_label={'Новый пароль еще раз'} state={'warning'}/>
				</div>
				<div className="warningText">
					<WarningText warning_text={'Пароли не совпадают'}/>
				</div>*/}
			</div>
			<button>Подтвердить</button>
		</div>
	);
};

export default RecoveryNewPassword;