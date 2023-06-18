import React from 'react';
import user_avatar from "../../asserts/icons/sidebars/user_avatar.png";
import like from "../../asserts/Like.svg"
import dislike from "../../asserts/dislike.svg"
import marker from "../../asserts/marker.svg"
import instituteAvatar from "../../asserts/institute_avatar.svg"
import clip from "../../asserts/clip.svg"
import {Rating} from "../../ui/rating/rating";
import InstitutionReviewPhoto from "./institutionReview_photo";
import InstitutionReviewAnswer from "./InstitutionReviewAnswer";

const InstitutionReview = () => {
	return (
		<div className='institutionReview'>
			<div className="markerCard_body">
				<img src={user_avatar} alt="" className='markerCard_body-user_avatar'/>
				<div className="markerCard_body-text">
					<div className='row'>
						<h2 className='markerCard_body-text_name mr-40px'>Имя Фамилия</h2>
						<div>
							<Rating size={'min'}/>
						</div>
					</div>
					<p className='markerCard_body-text_date'>22 апреля, 13:24</p>
					<p className='markerCard_body-text_review'>
						Сказать честно, когда пришли сюда, расстроились с мужем, узнав куда будет
						ходить наш ребёнок! НО, здесь такие прекрасные учителя, что не жалеем ни капли,
						рекомендую школу №21!!!
					</p>
				</div>
			</div>

			<div className="institutionReview_photos row">
				<InstitutionReviewPhoto/>
				<InstitutionReviewPhoto/>
				<InstitutionReviewPhoto/>
				<InstitutionReviewPhoto/>
				<InstitutionReviewPhoto/>
			</div>


			<div className="institutionReview_footer row items-center opacity">
				<img className='reaction' src={like} alt=""/>
				<p className='reaction_count'>1</p>
				<img className='reaction' src={dislike} alt=""/>
				<p className='reaction_count'>0</p>
				<img src={marker} alt=""/>
				<button className='noBtn institutionReview_btn opacity'>Ответить(0)</button>
				<button className='noBtn institutionReview_btn opacity'>Пожаловаться</button>
			</div>

			<div className="institutionReviewAnswers">
				<InstitutionReviewAnswer/>
				<InstitutionReviewAnswer/>
			</div>

			<div className="institutionReviewAnswers-input row">
				<div className="institutionReviewAnswers_input-block row">
					<img src={instituteAvatar} alt=""/>
					<input className='institutionReviewAnswers_input' type="text" placeholder='Написать комментарий...'/>
					<button className='noBtn'>
						<img src={clip} alt=""/>
					</button>
				</div>
				<button>Ответить</button>
			</div>

			<hr className='opacity mt-35px mb-25px'/>
		</div>
	);
};

export default InstitutionReview;