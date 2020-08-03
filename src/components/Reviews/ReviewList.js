import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = (props) => {
	console.log(props);
	const reviews = props.reviews.map((review) => (
		<ReviewItem
			key={review._id}
			review={review.review}
			grade={review.details.grade}
			quarter={`${review.quarter} ${review.year}`}
			date={review.reviewDate}
			recommend={review.details.recommend}
			details={review.details}
		/>
	));
	return <div className="mt-2">{reviews}</div>;
};

export default ReviewList;
