import React from 'react';
import { Link } from 'react-router-dom';

const CourseListItem = (props) => {
	let border_color = '';

	if (props.rating < 2.5) border_color = 'red';
	else if (props.rating < 3.5) border_color = 'yellow';
	else border_color = 'green';

	return (
		<Link to={`/course/${props.id}`} className="flex-1">
			<div
				className={`flex items-center mb-2 rounded overflow-hidden shadow-lg border-2 border-${border_color}-600`}
			>
				<div className="w-1/3 h-12 text-left px-4 py-2 m-2">{`${props.department} ${props.course}`}</div>
				<div className="w-1/3 h-12 text-left px-4 py-2 m-2">{`${props.professor}`}</div>
				<div className="w-1/3 h-12 text-right px-4 py-2 m-2">{`${props.rating.toFixed(
					1
				)}`}</div>
			</div>
		</Link>
	);
};

export default CourseListItem;
