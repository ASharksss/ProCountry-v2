import React from 'react';
import './InstitutionReviews.css'
import InstitutionReview from "./InstitutionReview";
import addReview from '../../asserts/addReview.svg'
import {NavLink} from "react-router-dom";

const InstitutionReviews = () => {
	return (
		<>
			<div className="row space-between">
				<p className='fs-24 opacity'>Оценки пользователей (0)</p>
				<button className='noBtn fs-18'>
				<span className="row items-center">
					<img src={addReview} className='mr-20px'/>
					<span className='solid '>Написать отзыв</span>
				</span>
				</button>
			</div>

			<div className='card institutionReviews'>
				<InstitutionReview/>
				<InstitutionReview/>
			</div>



		</>

	);
};

export default InstitutionReviews;