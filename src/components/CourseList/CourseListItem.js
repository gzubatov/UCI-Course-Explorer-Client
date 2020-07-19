import React from 'react';
import { Link } from 'react-router-dom';

const CourseListItem = (props) => {
	return (
		<Link to="/">
			<div className="max-w-lg rounded overflow-hidden shadow-lg">
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">
						The Coldest Sunset
					</div>
					<p className="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Voluptatibus quia, nulla! Maiores et perferendis
						eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div className="px-6 py-4">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						{props.department}
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						{props.course}
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						{props.professor}
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						{props.rating}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default CourseListItem;