import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import courseReviewsAPI from '../../util/api';

import LoadingSpinner from '../UIElements/LoadingSpinner';
import CourseInfo from '../Courses/CourseInfo';
import { CourseContext } from '../../context/course-context';

const AddReviewPage = () => {
	const courseContext = useContext(CourseContext);
	const [ course, setCourse ] = useState(courseContext.course);
	const [ options, setOptions ] = useState([
		{ value: 'all', label: 'All' }
	]);
	const courseId = useParams().cid;
	console.log(courseContext.courseId);

	useEffect(
		() => {
			const fetchCourseById = async () => {
				const response = await courseReviewsAPI.get(
					`/api/courses/id/${courseId}`
				);
				const courseData = response.data.course;
				const professorOptions = response.data.professorOptions;
				const profOptionsMapped = professorOptions.map((el) => {
					return {
						value : el._id,
						label : `${el.lastName}, ${el.firstName}`
					};
				});
				setOptions((prev) => [ ...prev, ...profOptionsMapped ]);
				setCourse(courseData);
				courseContext.setCourse(courseData);
				courseContext.courseId = courseId;
			};
			if (!courseContext.course) {
				console.log('in useEffect');
				fetchCourseById();
			}
		},
		[ courseContext, courseContext.course, courseId ]
	);

	return (
		<React.Fragment>
			{!course && (
				<div className="w-full mt-20 flex justify-center items-center">
					<LoadingSpinner message="Loading..." />
				</div>
			)}
			{course && (
				<div className="overflow-hidden">
					<CourseInfo course={course} />
				</div>
			)}
		</React.Fragment>
	);
};

export default AddReviewPage;
