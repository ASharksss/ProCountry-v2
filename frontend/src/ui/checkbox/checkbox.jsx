import React from 'react';
import './checkbox.css'


const Checkbox = ({checkbox_text}) => {
	return (
		<label className='checkbox_container'>
			<input type="checkbox" className='checkbox'/>
			<span className='checkbox_fake'></span>
			<span className='checkbox_text'>{checkbox_text}</span>
		</label>
	);
};

export default Checkbox;