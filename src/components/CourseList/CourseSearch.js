import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import courseReviewsAPI from '../../util/api';

import CourseList from './CourseList';

const COURSES = [
	{
		id               : 1,
		department       : 'COMPSCI',
		course           : '121',
		professor        : 'Martins, Alberto',
		difficultyRating : 2.7
	},
	{
		id               : 2,
		department       : 'COMPSCI',
		course           : '122B',
		professor        : 'Klefstad, Raymond',
		difficultyRating : 2.0
	},
	{
		id               : 3,
		department       : 'ISC',
		course           : '45',
		professor        : 'Thornton, Alex',
		difficultyRating : 3.7
	},
	{
		id               : 4,
		department       : 'INF',
		course           : '121',
		professor        : 'Van Der Hoek, Andre',
		difficultyRating : 2.7
	},
	{
		id               : 5,
		department       : 'COMPSCI',
		course           : '45',
		professor        : 'Thornton, Alex',
		difficultyRating : 3.7
	},
	{
		id               : 6,
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
			const fetchCourses = async () => {
				let results;
				if (!course) {
					const response = await courseReviewsAPI.get(
						`/api/courses/${department.toUpperCase()}`
					);
					results = response.data.courses;
				}
				else {
					const response = await courseReviewsAPI.get(
						`/api/courses/${department.toUpperCase()}/${course}`
					);
					results = response.data.course;
				}
				console.log(results);
				setLoadedCourses(results);
			};
			fetchCourses();
			// let courses;
			// if (!course) {
			// 	courses = COURSES.filter(
			// 		(course) => course.department.toLowerCase() === department
			// 	);
			// }
			// else {
			// 	courses = COURSES.filter((c) => {
			// 		return (
			// 			c.department.toLowerCase() ===
			// 				department.toLowerCase() &&
			// 			c.course.toString().toLowerCase() ===
			// 				course.toLowerCase()
			// 		);
			// 	});
			// }
			//setLoadedCourses(courses);
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
