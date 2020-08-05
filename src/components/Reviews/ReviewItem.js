import React from 'react';

import { mapDetailToLabel } from '../../util/details-mapper';

const CourseInfoDetail = ({ label, value }) => {
	return (
		<React.Fragment>
			{value && (
				<div className="mr-4 mt-1 w-auto">
					<span className="font-bold pr-2 flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold text-white">
						{mapDetailToLabel(label)}
					</span>
				</div>
			)}
		</React.Fragment>
	);
};

const ReviewInfoDetail = ({ label, value }) => {
	return (
		<React.Fragment>
			<span className=" bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
				{label}: {value}
			</span>
		</React.Fragment>
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

			<div className="px-6 pt-2">
				<p className="text-black text-base whitespace-pre-line">
					{props.review}
				</p>
			</div>
			<div className="flex flex-wrap px-6 py-4">
				<ReviewInfoDetail
					label="Review Date"
					value={new Intl.DateTimeFormat('en-US', {
						year  : 'numeric',
						month : 'long'
					}).format(new Date(props.date))}
				/>
				<ReviewInfoDetail label="Quarter Taken" value={props.quarter} />
				{props.grade && (
					<ReviewInfoDetail
						label="Grade Received"
						value={props.grade}
					/>
				)}
				{props.recommend !== undefined && (
					<ReviewInfoDetail
						label="Recommend class"
						value={props.recommend ? 'Yes' : 'No'}
					/>
				)}
			</div>
		</div>
	);
};

export default ReviewItem;
