import React from 'react';

const CourseInfoDetail = ({ label, value }) => {
	return (
		<div className="mr-4 mb-4 w-auto">
			<span className="font-bold pr-2">{label}</span> {value}
		</div>
	);
};

const ReviewItem = (props) => {
	return (
		<div className="rounded overflow-hidden shadow-lg border border-solid mb-2 ">
			<ul className="flex flex-wrap mt-2">
				<li>
					<CourseInfoDetail label="Attendance" value="Mandatory" />
				</li>
				<li>
					<CourseInfoDetail label="iClicker" value="No" />
				</li>
				<li>
					<CourseInfoDetail label="Homework" value="Yes" />
				</li>
				<li>
					<CourseInfoDetail label="Quizzes" value="Yes" />
				</li>
				<li>
					<CourseInfoDetail label="Exams" value="Yes" />
				</li>
				<li>
					<CourseInfoDetail label="Textbook" value="Not Required" />
				</li>
			</ul>

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
