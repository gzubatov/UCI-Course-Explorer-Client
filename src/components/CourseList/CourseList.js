import React, { useState, useEffect, useCallback } from 'react';

import CourseListItem from './CourseListItem';

const CourseList = (props) => {
	const [ sortAsc, setSortAsc ] = useState(true);

	const sortListAsc = useCallback(
		() => {
			props.courses.sort((a, b) => (a.course < b.course ? 1 : -1));
		},
		[ props ]
	);

	const sortListDesc = useCallback(
		() => {
			props.courses.sort((a, b) => (a.course < b.course ? -1 : 1));
		},
		[ props ]
	);

	useEffect(
		() => {
			if (sortAsc) {
				sortListAsc();
			}
			else {
				sortListDesc();
			}
		},
		[ sortAsc, sortListAsc, sortListDesc ]
	);

	const courseItems = props.courses.map((course, index) => {
		return (
			<CourseListItem
				key={index}
				id={course.id}
				department={course.department}
				course={course.courseNumber}
				professor={course.professor}
				rating={course.avgDifficulty}
			/>
		);
	});

	return (
		<div className="w-1/2">
			<div className="flex mb-2 text-center font-bold">
				<div
					className="w-2/5 text-left"
					onClick={() => setSortAsc((prev) => !prev)}
				>
					Course
				</div>
				<div className="w-2/5 text-left">Professor</div>
				<div className="w-1/5 text-right">Difficulty Rating</div>
			</div>
			<div className="container w-full">{courseItems}</div>
		</div>
	);
};

export default CourseList;
