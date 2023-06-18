import React from 'react';
import user_avatar from "../../asserts/icons/sidebars/user_avatar.png";
import {Rating} from "../../ui/rating/rating";
import like from "../../asserts/Like.svg";
import dislike from "../../asserts/dislike.svg";
import marker from "../../asserts/marker.svg";

const InstitutionReviewAnswer = () => {
	return (
		<div className='institutionReviewAnswer'>
			<hr className='opacity mt-35px mb-25px'/>
			<div className="markerCard_body">
				<img src={user_avatar} alt="" className='institutionReviewAnswers_avatar'/>
				<div className="markerCard_body-text">
					<h2 className='markerCard_body-text_name'>Имя Фамилия</h2>
					<p className='markerCard_body-text_date'>22 апреля, 13:24</p>
					<p className='opacity institutionReviewAnswers_text'>
						Сказать честно, когда пришли сюда, расстроились с мужем, узнав куда будет
						ходить наш ребёнок! НО, здесь такие прекрасные учителя, что не жалеем ни капли,
						рекомендую школу №21!!!
					</p>
				</div>
			</div>
			<div className="institutionReviewAnswer_footer row items-center opacity">
				<img className='reaction' src={like} alt=""/>
				<p className='reaction_count'>1</p>
				<img className='reaction' src={dislike} alt=""/>
				<p className='reaction_count'>0</p>
				<img src={marker} alt=""/>
				<button className='noBtn institutionReview_btn opacity'>Ответить(0)</button>
				<button className='noBtn institutionReview_btn opacity'>Пожаловаться</button>
			</div>
		</div>
	);
};

export default InstitutionReviewAnswer;