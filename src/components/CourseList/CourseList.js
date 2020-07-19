import React from 'react';
import { useParams } from 'react-router-dom';

import CourseListItem from './CourseListItem';

const COURSES = [
	{
		department       : 'compsci',
		course           : 121,
		professor        : 'Martins',
		difficultyRating : 2.7
	},
	{
		department       : 'compsci',
		course           : '122B',
		professor        : 'Klefstad',
		difficultyRating : 2.7
	},
	{
		department       : 'ISC',
		course           : 45,
		professor        : 'Thornton',
		difficultyRating : 2.7
	},
	{
		department       : 'inf',
		course           : 121,
		professor        : 'Van Der Hoek',
		difficultyRating : 2.7
	}
];

const CourseList = (props) => {
	const { department, course } = useParams();

	let courses;
	if (!course) {
		courses = COURSES.filter(
			(course) => course.department.toLowerCase() === department
		).map((course, index) => {
			return (
				<CourseListItem
					key={index}
					department={course.department}
					course={course.course}
					professor={course.professor}
					rating={course.difficultyRating}
				/>
			);
		});
	}
	else {
		courses = COURSES.filter((c) => {
			return (
				c.department.toLowerCase() === department.toLowerCase() &&
				c.course.toString().toLowerCase() === course.toLowerCase()
			);
		}).map((course, index) => {
			return (
				<CourseListItem
					key={index}
					department={course.department}
					course={course.course}
					professor={course.professor}
					rating={course.difficultyRating}
				/>
			);
		});
	}

	return (
		<div>
			<h1>Course Items: </h1>
			{courses}
		</div>
	);
};

export default CourseList;
