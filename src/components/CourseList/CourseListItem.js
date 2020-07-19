import React from 'react';
import { Link } from 'react-router-dom';

const CourseListItem = (props) => {
	let border_color = '';

	if (props.rating < 2.5) border_color = 'red';
	else if (props.rating < 3.5) border_color = 'yellow';
	else border_color = 'green';

	return (
		<Link to="/" className="flex-1">
			<div
				className={`flex items-center mb-2 rounded overflow-hidden shadow-lg border-2 border-${border_color}-600`}
			>
				<div className="w-1/3 h-12 text-left px-4 py-2 m-2">{`${props.department} ${props.course}`}</div>
				<div className="w-1/3 h-12 text-left px-4 py-2 m-2">{`${props.professor}`}</div>
				<div className="w-1/3 h-12 text-right px-4 py-2 m-2">{`${props.rating}`}</div>
			</div>
		</Link>
	);
};

export default CourseListItem;

/*
<div
				className={`max-w-lg rounded overflow-hidden shadow-lg border-2 border-${border_color}-600 mb-1`}
			>
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
            */
