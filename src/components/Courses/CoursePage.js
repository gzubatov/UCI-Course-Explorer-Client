import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CourseInfo from './CourseInfo';
import CourseDataChart from './CourseDataChart';

const COURSES = [
	{
		id               : 1,
		department       : 'COMPSCI',
		course           : '121',
		title            : 'Information Retrieval',
		description      :
			'An introduction to information retrieval including indexing, retrieval, classifying, and clustering text and multimedia documents.',
		professor        : 'Martins, Alberto',
		difficultyRating : 2.7,
		prereqs          :
			'I&C SCI 6D and (MATH 3A or I&C SCI 6N) and MATH 2B and (I&C SCI 46 or CSE 46) and (COMPSCI 112 or COMPSCI 116 or COMPSCI 171 or COMPSCI 178). I&C SCI 6D with a grade of C or better. MATH 3A with a grade of C or better. I&C SCI 6N with a grade of C or better. MATH 2B with a grade of C or better. I&C SCI 46 with a grade of C or better. CSE 46 with a grade of C or better',
		groupWork        : 'Optional',
		difficulty       : [ 7, 7, 18, 31, 34 ]
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
		title            : 'Information Retrieval',
		description      :
			'An introduction to information retrieval including indexing, retrieval, classifying, and clustering text and multimedia documents.',
		professor        : 'Van Der Hoek, Andre',
		difficultyRating : 2.7
	}
];

const CoursePage = () => {
	const [ course, setCourse ] = useState();
	const courseId = useParams().cid;

	useEffect(
		() => {
			const filteredCourse = COURSES.find(
				(course) => course.id.toString() === courseId
			);
			setCourse(filteredCourse);
		},
		[ courseId ]
	);

	return (
		<React.Fragment>
			{!course && <h1>Loading...</h1>}
			{course && (
				<div>
					<CourseInfo course={course} />
					<div className="flex flex-wrap">
						<div className="w-1/2 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
							<CourseDataChart
								data={course.difficulty}
								bgColors={[
									'#B21F00',
									'#0064A4',
									'#1B3D6D',
									'#FFD200',
									'#F78D2D'
								]}
								bgColorsHover={[
									'#501800',
									'#6AA2B8',
									'#1B3D8D',
									'#F7EB5F',
									'#F78D4D'
								]}
								labels={[
									'Prepare to be wrecked',
									'Easy A',
									'Mostly easy',
									'Kinda hard',
									'Very challenging'
								]}
								options={{
									title      : {
										display  : true,
										text     : 'Difficulty Scores',
										fontSize : 20
									},
									legend     : {
										display  : true,
										position : 'right'
									},
									responsive : true
								}}
							/>
						</div>
						<div className="w-1/2 sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
							<CourseDataChart
								data={course.difficulty}
								bgColors={[
									'#B21F00',
									'#0064A4',
									'#1B3D6D',
									'#FFD200',
									'#F78D2D'
								]}
								bgColorsHover={[
									'#501800',
									'#6AA2B8',
									'#1B3D8D',
									'#F7EB5F',
									'#F78D4D'
								]}
								labels={[
									'Prepare to be wrecked',
									'Easy A',
									'Mostly easy',
									'Kinda hard',
									'Very challenging'
								]}
								options={{
									title      : {
										display  : true,
										text     : 'Difficulty Scores',
										fontSize : 20
									},
									legend     : {
										display  : true,
										position : 'right'
									},
									responsive : true
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default CoursePage;
