import React from 'react';
import Range from "../../ui/range/range";
import UploadFile from "../../ui/uploadFile/uploadFile";

const FormReviewPage = ({form_title}) => {
	return (
		<div className='formReview'>
			<h1 className='form_title'>{form_title}</h1>
			<p className='formReview_subtitle'>Оцените учреждение</p>
			<Range/>
			<div className="review_textarea-block">
				<h2 className='review_textarea-subtitle'>Расскажите свое мнение</h2>
				<textarea className='review_textarea' placeholder='Напишите свое мнение...'></textarea>
			</div>
			<div className="formReview_uploadFile">
				<h2 className='formReview_uploadFile-title'>Загрузите до 5 фотографий</h2>
				<UploadFile/>
			</div>
			<div className="formReview_footer">
				<p>Размещая отзыв на сайте, вы даёте согласие на использование отзыва на сторонних ресурсах</p>
			</div>
			<button>Отправить</button>
		</div>
	);
};

export default FormReviewPage;