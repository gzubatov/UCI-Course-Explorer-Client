import React from 'react';

const CourseInfoDetail = ({ label, value }) => {
	return (
		<div className="mr-4 mb-4 w-auto">
			<span className="font-bold pr-2">{label}</span> {value}
		</div>
	);
};

const CourseInfo = ({ course }) => {
	return (
		<div className="m-5 mt-0 mb-0 w-auto">
			<h1 className="font-bold text-3xl">{`${course.department} ${course.courseNumber} ${course.title
				? `- ${course.title}`
				: ''}`}</h1>
			<p>{course.description}</p>
			<hr />
			<br />
			<CourseInfoDetail label="Prerequisites" value={course.prereqs} />
			<hr />
		</div>
	);
};

export default CourseInfo;
