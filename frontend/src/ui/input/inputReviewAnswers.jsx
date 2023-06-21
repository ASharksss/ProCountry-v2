import React from 'react';
import instituteAvatar from "../../asserts/institute_avatar.svg";
import clip from "../../asserts/clip.svg";

const InputReviewAnswers = () => {
	return (
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
	);
};

export default InputReviewAnswers;