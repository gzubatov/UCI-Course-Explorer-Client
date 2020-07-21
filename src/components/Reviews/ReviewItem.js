import React from 'react';

const ReviewItem = (props) => {
	console.log(props);
	return (
		<div className="rounded overflow-hidden shadow-lg border border-solid mb-2 ">
			<div className="px-6 py-4">
				<p className="text-black text-base">{props.review}</p>
			</div>
			<div className="flex flex-wrap px-6 py-4">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Review Date: {props.date}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Quarter Taken: {props.quarter}
				</span>
				{props.grade && (
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						Grade Received: {props.grade}
					</span>
				)}
				{props.recommend !== undefined && (
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						Recommend class: {props.recommend ? 'Yes' : 'No'}
					</span>
				)}
			</div>
		</div>
	);
};

export default ReviewItem;
