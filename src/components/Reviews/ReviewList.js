import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = (props) => {
	const reviews = props.reviews.map((review, index) => (
		<ReviewItem
			key={index}
			review={review.review}
			grade={review.grade}
			quarter={`${review.quarter} ${review.year}`}
			date={review.date}
			recommend={review.recommend}
		/>
	));
	return <React.Fragment>{reviews}</React.Fragment>;
};

export default ReviewList;
