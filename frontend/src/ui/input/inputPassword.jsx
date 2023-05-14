import React from 'react';
import eye from '../../asserts/icons/eye.png'

const InputPassword = ({input_label, size, input_placeholder}) => {
	return (
		<div className="input">
			<label className='input_label'>{input_label}</label>
			<div className={'input_field ' + size}>
				<input className={'input_field-area ' + size} placeholder={input_placeholder}/>
				<img src={eye} className='input_eye'/>
			</div>
		</div>
	);
};

export default InputPassword;