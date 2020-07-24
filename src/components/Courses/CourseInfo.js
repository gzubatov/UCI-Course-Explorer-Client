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
			<h1 className="font-bold text-3xl">{`${course.department} ${course.course} - ${course.title}`}</h1>
			<p>{course.description}</p>
			<hr />
			<br />
			<CourseInfoDetail label="Prerequisites" value={course.prereqs} />
			<hr />
			<ul className="flex flex-wrap mt-2">
				<li>
					<CourseInfoDetail label="Attendance" value="Mandatory" />
				</li>
				<li>
					<CourseInfoDetail label="iClicker" value="No" />
				</li>
				<li>
					<CourseInfoDetail
						label="Group Work"
						value={course.groupWork}
					/>
				</li>
				<li>
					<CourseInfoDetail label="Homework" value="Yes" />
				</li>
				<li>
					<CourseInfoDetail label="Quizzes" value="Yes" />
				</li>
				<li>
					<CourseInfoDetail label="Exams" value="Yes" />
				</li>
				<li>
					<CourseInfoDetail label="Textbook" value="Not Required" />
				</li>
			</ul>
		</div>
	);
};

export default CourseInfo;
