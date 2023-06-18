import React from 'react';
import InstitutionReviews from "../../components/InstitutuionReviews/InstitutionReviews";
import ReviewsPhoto from "../../components/ReviewsPhoto/ReviewsPhoto";

const InstitutionReviewsPage = () => {
	return (
		<div>
			<h1 className='institutionPage-title mt-150px'>Название учреждения</h1>
			<div className="row space-between">
				<div className="bread_crumb">
					тут хлебные крошки
				</div>
			</div>
			<ReviewsPhoto/>
			<InstitutionReviews/>
		</div>
	);
};

export default InstitutionReviewsPage;