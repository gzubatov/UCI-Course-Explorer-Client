import React from 'react';

import CourseListItem from './CourseListItem';
import RowSizeSelector from '../UIElements/RowSizeSelector';

const CourseList = (props) => {
	const courseItems = props.courses.map((course) => {
		return (
			<CourseListItem
				key={course._id}
				id={course._id}
				department={course.department}
				course={course.courseNumber}
				difficulty={course.avgRatings.avgDifficulty}
				workload={course.avgRatings.avgWorkload}
			/>
		);
	});

	return (
		<div className="w-screen sm:w-screen md:w-1/2 lg:w-1/2 xl:w-1/2 m-auto mb-4">
			<RowSizeSelector
				onRowChange={props.onRowChange}
				selectOptions={[ 5, 10, 25, 50 ]}
			/>
			<div className="flex justify-between mt-2 mb-2 text-center font-bold">
				<div className="w-2/5 text-left">Course</div>
				<div className="text-left">Difficulty Rating</div>
				<div className="text-right">Workload Rating</div>
			</div>
			<div className="container w-full">{courseItems}</div>
		</div>
	);
};

export default CourseList;
