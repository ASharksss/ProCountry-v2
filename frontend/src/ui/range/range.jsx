import React, {useState} from 'react';
import './range.css'

const Range = () => {

	const [rating, setRating] = useState(0)


	return (
		<div className="range">
			<input type="range" min={0} max={100} className="input_range" onChange={(e) => setRating(e.target.value)}/>
			<div className="row space-between">
				<p className='range_title'>0%</p>
				<p className='range_title'>100%</p>
			</div>
			<input type="text" className='range_value' value={rating + '%'}/>
		</div>
	);
};

export default Range;