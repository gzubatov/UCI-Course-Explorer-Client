import React from 'react';
import ReviewItem from './ReviewItem';
import NoDataDisplay from '../UIElements/NoDataDisplay';

const ReviewList = (props) => {
	let reviews = props.reviews.map((review) => {
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
		else {
			return undefined;
		}
	});

	reviews = reviews.filter((el) => el !== undefined);

	return (
		<React.Fragment>
			{reviews.length > 0 && <div className="mt-2">{reviews}</div>}
			{reviews.length === 0 && (
				<NoDataDisplay
					message="There are no student tips for this professor-course combo"
					classNames="w-screen sm:w-screen md:w-1/2 lg:w-3/5 xl:w-3/5 "
				/>
			)}
		</React.Fragment>
	);
};

export default ReviewList;
