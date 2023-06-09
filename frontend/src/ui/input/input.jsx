import React from 'react';
import star from "../../asserts/icons/star.svg";

const Input = ({input_label, size, input_placeholder}) => {
	return (
		<div className="input">
			<label className='input_label'>{input_label}</label>
			<div className={'input_field ' + size}>
				<input className={'input_field-area ' + size} placeholder={input_placeholder}/>
			</div>
		</div>
	);
};

export default Input;