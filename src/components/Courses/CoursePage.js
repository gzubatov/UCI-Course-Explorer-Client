import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CourseInfo from './CourseInfo';

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
const CoursePage = () => {
	const [ course, setCourse ] = useState(null);
	const { courseId } = useParams().cid;

	useEffect(
		() => {
			const filteredCourse = COURSES.filter(
				(course) => course.id === courseId
			);
			setCourse(filteredCourse);
		},
		[ course, courseId ]
	);

	return (
		<React.Fragment>
			{!course && <h1>Loading...</h1>}
			{course && (
				<CourseInfo
					department={course.department}
					course={course.course}
					courseTitle="Lorem Ipsum"
				/>
			)}
		</React.Fragment>
	);
};

export default CoursePage;
