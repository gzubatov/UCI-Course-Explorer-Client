import React from 'react';

const CourseInfo = ({ course }) => {
	return (
		<div className="m-5">
			<h1 className="font-bold text-3xl">{`${course.department} ${course.course} - ${course.title}`}</h1>
			<h3 className="font-bold text-xl">Professor: {course.professor}</h3>
			<p>{course.description}</p>
			<br />
			<ul>
				<li>
					<span className="font-bold">Prerequisites:</span>{' '}
					{course.prereqs}
				</li>
				<li>
					<span className="font-bold">Group Work:</span>{' '}
					{course.groupWork}
				</li>
				<li>
					<span className="font-bold">Homework:</span> Yes
				</li>
				<li>
					<span className="font-bold">Quizzes:</span> Yes
				</li>
				<li>
					<span className="font-bold">Exams:</span> Yes
				</li>
			</ul>
		</div>
	);
};

export default CourseInfo;
