import React from 'react';

const FormSelects = ({select_name}) => {
	return (

			<select className='formSelect'>
				<option>
          <span>
            {select_name}.
          </span>
				</option>
			</select>

	);
};

export default FormSelects;