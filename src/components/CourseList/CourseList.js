import React from 'react';
import { useParams } from 'react-router-dom';

import CourseListItem from './CourseListItem';

const COURSES = [
	{
		department       : 'COMPSCI',
		course           : 121,
		professor        : 'Martins, Alberto',
		difficultyRating : 2.7
	},
	{
		department       : 'COMPSCI',
		course           : '122B',
		professor        : 'Klefstad, Raymond',
		difficultyRating : 2.0
	},
	{
		department       : 'ISC',
		course           : 45,
		professor        : 'Thornton, Alex',
		difficultyRating : 3.7
	},
	{
		department       : 'INF',
		course           : 121,
		professor        : 'Van Der Hoek, Andre',
		difficultyRating : 2.7
	},
	{
		department       : 'COMPSCI',
		course           : 45,
		professor        : 'Thornton, Alex',
		difficultyRating : 3.7
	},
	{
		department       : 'COMPSCI',
		course           : 121,
		professor        : 'Van Der Hoek, Andre',
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
		<div className="w-1/2">
			<div className="flex mb-2 text-center font-bold">
				<div className="w-2/5 text-left">Course</div>
				<div className="w-2/5 text-left">Professor</div>
				<div className="w-1/5 text-right">Difficulty Rating</div>
			</div>
			<div className="container w-full">{courses}</div>
		</div>
	);
};

export default CourseList;
