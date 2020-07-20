import React from 'react';

const CourseInfo = (props) => {
	return (
		<h1>{`${props.department} ${props.course} - ${props.courseTitle}`}</h1>
	);
};

export default CourseInfo;
