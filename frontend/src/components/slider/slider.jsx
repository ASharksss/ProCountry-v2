import React from "react";
import './slider.css'
import Slider from "react-slick";



const photos = [
	{
		id: 1,
		url: "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
		alt: "Photo 1",
	},
	{
		id: 2,
		url: "https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg",
		alt: "Photo 2",
	},
	{
		id: 3,
		url: "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg",
		alt: "Photo 3",
	},
];

const SliderShow = () => {

	const settings = {
		dots: true,
		speed: 500,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,

	};

	return (
		<div className='slider'>
			<Slider {...settings}>
				{photos.map((photo) => (
					<div key={photo.id}>
						<img className='slider-image' src={photo.url} alt={photo.alt} />
					</div>
				))}
			</Slider>
		</div>

	);
};

export default SliderShow;