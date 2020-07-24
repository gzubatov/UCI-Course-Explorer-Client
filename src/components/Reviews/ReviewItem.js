import React from 'react';

const CourseInfoDetail = ({ label, value }) => {
	let printedValue = '';
	if (typeof value === 'boolean') {
		printedValue = value ? 'Yes' : 'No';
	}
	else {
		printedValue = value;
	}

	return (
		<div className="mr-4 mb-4 w-auto">
			<span className="font-bold pr-2">{label}</span> {printedValue}
		</div>
	);
};

const ReviewItem = (props) => {
	const reviewDetails = [];
	if (props) {
		for (const [ key, value ] of Object.entries(props.details)) {
			if (key !== 'grade' && key !== 'recommend') {
				reviewDetails.push(
					<li key={key}>
						<CourseInfoDetail label={key} value={value} />
					</li>
				);
			}
		}
	}

	return (
		<div className="rounded overflow-hidden shadow-lg border border-solid mb-2 ">
			<ul className="flex flex-wrap mt-2 px-6">{reviewDetails}</ul>

			<div className="px-6 py-4">
				<p className="text-black text-base">{props.review}</p>
			</div>
			<div className="flex flex-wrap px-6 py-4">
				<span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Review Date:{' '}
					{new Intl.DateTimeFormat('en-US', {
						year  : 'numeric',
						month : 'long'
					}).format(new Date(props.date))}
				</span>
				<span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Quarter Taken: {props.quarter}
				</span>
				{props.grade && (
					<span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						Grade Received: {props.grade}
					</span>
				)}
				{props.recommend !== undefined && (
					<span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						Recommend class: {props.recommend ? 'Yes' : 'No'}
					</span>
				)}
			</div>
		</div>
	);
};

export default ReviewItem;
