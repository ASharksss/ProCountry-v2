import React from 'react';
import './input.css'
import eye from '../../asserts/icons/eye.png'

const InputPassword = ({input_label, size, input_placeholder, state}) => {
	return (
		<div className="input">
			<label className='input_label'>{input_label}</label>
			<div className={'input_field ' + size}>
				<input type='password' className={state +' input_field-password ' + size} placeholder={input_placeholder}/>
				<img src={eye} className='input_eye'/>
			</div>
		</div>
	);
};

export default InputPassword;