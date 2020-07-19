import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CourseList from './CourseList';

const COURSES = [
	{
		department       : 'COMPSCI',
		course           : '121',
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
		course           : '45',
		professor        : 'Thornton, Alex',
		difficultyRating : 3.7
	},
	{
		department       : 'INF',
		course           : '121',
		professor        : 'Van Der Hoek, Andre',
		difficultyRating : 2.7
	},
	{
		department       : 'COMPSCI',
		course           : '45',
		professor        : 'Thornton, Alex',
		difficultyRating : 3.7
	},
	{
		department       : 'COMPSCI',
		course           : '121',
		professor        : 'Van Der Hoek, Andre',
		difficultyRating : 2.7
	}
];

const CourseSearch = () => {
	const { department, course } = useParams();
	const [ loadedCourses, setLoadedCourses ] = useState();

	useEffect(
		() => {
			let courses;
			if (!course) {
				courses = COURSES.filter(
					(course) => course.department.toLowerCase() === department
				);
			}
			else {
				courses = COURSES.filter((c) => {
					return (
						c.department.toLowerCase() ===
							department.toLowerCase() &&
						c.course.toString().toLowerCase() ===
							course.toLowerCase()
					);
				});
			}
			setLoadedCourses(courses);
		},
		[ department, course ]
	);

	return (
		<React.Fragment>
			{!loadedCourses && <h1>Loading...</h1>}
			{loadedCourses && <CourseList courses={loadedCourses} />}
		</React.Fragment>
	);
};

export default CourseSearch;
