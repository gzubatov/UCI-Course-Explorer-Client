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
				className={`flex h-12 justify-between items-center mb-2 rounded overflow-hidden shadow-lg border-2 border-${border_color}-600 border-blue-500`}
			>
				<div className="flex-1 text-left px-4 py-2 m-2 font-mono">{`${props.department} ${props.course}`}</div>
				{props.difficulty !== 0 && (
					<React.Fragment>
						<div className="w-1/4 text-center px-4 py-2 m-2 font-mono">{`${props.difficulty.toFixed(
							1
						)}`}</div>
						<div className="w-1/4 text-center px-4 py-2 m-2 font-mono">{`${props.workload.toFixed(
							1
						)}`}</div>
					</React.Fragment>
				)}
				{props.difficulty === 0 && (
					<div className="w-1/2 h-12 text-right px-4 py-2 m-2 mr-32 font-mono">
						No Data
					</div>
				)}
			</div>
		</Link>
	);
};

export default CourseListItem;
