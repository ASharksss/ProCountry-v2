import React from 'react';
import './warning.css'
import warning_icon from '../../asserts/icons/warning.svg'

const WarningText = ({warning_text}) => {
	return (
		<div className='warningText'>
			<img className='warning_icon' src={warning_icon}/>
			<p className='warning_text'>{warning_text}</p>
		</div>
	);
};

export default WarningText;