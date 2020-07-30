import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import courseReviewsAPI from '../../util/api';

import CourseList from './CourseList';
import LoadingSpinner from '../UIElements/LoadingSpinner';

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
		},
		[ department, course ]
	);

	return (
		<React.Fragment>
			{!loadedCourses && <LoadingSpinner message="Loading..." />}
			{loadedCourses && <CourseList courses={loadedCourses} />}
		</React.Fragment>
	);
};

export default CourseSearch;
