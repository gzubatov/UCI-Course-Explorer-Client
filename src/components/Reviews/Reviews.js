import React from 'react';

import ReviewList from './ReviewList';

const Reviews = (props) => {
	return (
		<div className="container mt-4 mx-auto">
			<h3 className="font-bold text-xl">Student Tips:</h3>
			{props.reviews && <ReviewList reviews={props.reviews} />}
		</div>
	);
};

export default Reviews;
