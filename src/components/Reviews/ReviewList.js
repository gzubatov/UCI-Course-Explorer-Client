import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = (props) => {
	const reviews = props.reviews.map((review) => {
		if (review.review !== undefined && review.review.trim().length > 0) {
			return (
				<ReviewItem
					key={review._id}
					review={review.review}
					grade={review.details.grade}
					quarter={`${review.quarter} ${review.year}`}
					date={review.reviewDate}
					recommend={review.details.recommend}
					details={review.details}
				/>
			);
		}
	});
	return <div className="mt-2">{reviews}</div>;
};

export default ReviewList;
