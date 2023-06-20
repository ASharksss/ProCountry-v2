import React, { useState } from 'react';
import './input.css'
import eye from '../../asserts/icons/eye.png'

const InputPassword = ({ input_label, size, input_placeholder, state, password, setPassword }) => {
	const [showPassword, setShowPassword] = useState(false)
	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	}
	return (
		<div className="input">
			<label className='input_label'>{input_label}</label>
			<div className={'input_field ' + size}>
				<input type={!showPassword ? 'password' : 'text'} value={password} onChange={e => setPassword(e.target.value)}
					className={state + ' input_field-password ' + size} placeholder={input_placeholder} required/>
				<img src={eye} style={{ cursor: 'pointer' }} className='input_eye' onClick={() => handleShowPassword()}/>
			</div>
		</div>
	);
};

export default InputPassword;