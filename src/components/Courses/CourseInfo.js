import React from 'react';
import { Link } from 'react-router-dom';

const CourseInfoDetail = ({ label, value }) => {
	return (
		<div className="mr-4 mb-4 w-auto">
			<span className="font-bold pr-2">{label}</span> {value}
		</div>
	);
};

const CourseInfo = ({ course, courseId }) => {
	return (
		<div className="m-5 mt-0 mb-0 w-auto">
			<div className="flex flex-wrap justify-between">
				<h1 className="font-bold text-3xl">{`${course.department} ${course.courseNumber} ${course.title
					? `- ${course.title}`
					: ''}`}</h1>
				{courseId && (
					<Link
						to={`/course/${courseId}/review`}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-2"
					>
						+ Add Review
					</Link>
				)}
			</div>
			<p>{course.description}</p>
			<hr />
			<br />
			<CourseInfoDetail label="Prerequisites" value={course.prereqs} />
			<hr />
		</div>
	);
};

export default CourseInfo;
