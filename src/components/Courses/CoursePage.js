import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CourseInfo from './CourseInfo';
import CourseDataChart from './CourseDataChart';
import Reviews from '../Reviews/Reviews';
import Input from '../FormElements/Input';

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
		difficulty       : [ 7, 7, 18, 31, 34 ],
		workload         : [ 4, 19, 25, 49 ],
		reviews          : [
			{
				review     :
					'I found the book "Python Crash Course" very helpful. I read the sections reviewing the topics that were being covered on Canvas for that week.',
				quarter    : 'Fall',
				year       : 2018,
				date       : 'July 2020',
				grade      : 'A-',
				recommend  : true,
				difficulty : [ 7, 7, 18, 31, 34 ],
				workload   : [ 1, 2, 3, 4 ],
				professor  : 'Martins'
			},
			{
				review     :
					"Very easy class if you're familiar with coding already. If not, it's a gentle and fair introduction, and should still not take up much of your time. The concepts are explained quite well and you are given plenty of exercises to work through to solidify those concepts.",
				quarter    : 'Fall',
				year       : 2018,
				date       : 'July 2020',
				grade      : 'A-',
				recommend  : false,
				difficulty : [ 3, 14, 9, 25, 44 ],
				workload   : [ 4, 3, 2, 1 ],
				professor  : 'Ibrahim'
			},
			{
				review     :
					"I went into this class with no prior CS experience, and it was my first class at UCI. If I could do it differently, I would have taken it at a comm. college to save money (you can transfer up to 12 credits). I thought the class was very easy in the beginning, and then difficulty just ramped up towards the end. Other students have commented before that it really depends on the TA you get, and I completely agree. I had a TA who docked me for tiny formatting things, largely based on preference. When we worked in a group, other students in this class shared that this wasn't their experience at all (confirming that difficulty depends partially on TA). However, because it was my first class, I felt like I learned a lot. ",
				quarter    : 'Fall',
				year       : 2018,
				date       : 'July 2020',
				grade      : 'A-',
				difficulty : [ 7, 7, 18, 31, 34 ],
				workload   : [ 1, 2, 3, 4 ],
				professor  : 'Martins'
			},
			{
				review     :
					'I found the book "Python Crash Course" very helpful. I read the sections reviewing the topics that were being covered on Canvas for that week.',
				quarter    : 'Fall',
				year       : 2018,
				date       : 'July 2020',
				difficulty : [ 3, 17, 8, 21, 24 ],
				workload   : [ 4, 3, 2, 1 ],
				professor  : 'Ibrahim'
			}
		]
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

const OPTIONS = [
	{ value: 'all', label: 'All' },
	{ value: 'martins', label: 'Martins, Alberto' },
	{ value: 'ibrahim', label: 'Ibrahim' }
];

const CoursePage = () => {
	const [ course, setCourse ] = useState();
	const [ filter, setFilter ] = useState(OPTIONS[0]);
	const [ difficultyData, setDifficultyData ] = useState();
	const [ workloadData, setWorkloadData ] = useState();
	const [ reviews, setReviews ] = useState();
	const courseId = useParams().cid;

	useEffect(
		() => {
			const filteredCourse = COURSES.find(
				(course) => course.id.toString() === courseId
			);
			setCourse(filteredCourse);

			let filteredReviews;

			if (filter.value === 'all') {
				filteredReviews = filteredCourse.reviews;
			}
			else {
				filteredReviews = filteredCourse.reviews.filter(
					(review) => review.professor.toLowerCase() === filter.value
				);
			}

			setReviews(filteredReviews);

			let filteredDifficulty = [ 0, 0, 0, 0, 0 ];
			let filteredWorkload = [ 0, 0, 0, 0 ];

			filteredReviews.forEach((review) => {
				review.difficulty.forEach(
					(rating, index) => (filteredDifficulty[index] += rating)
				);

				review.workload.forEach(
					(rating, index) => (filteredWorkload[index] += rating)
				);
			});

			setDifficultyData(filteredDifficulty);
			setWorkloadData(filteredWorkload);
		},
		[ course, courseId, filter ]
	);

	// useEffect(() => {

	// }, [filter])

	return (
		<React.Fragment>
			{!course && <h1>Loading...</h1>}
			{course && (
				<div>
					<CourseInfo course={course} />
					<div className="max-w-sm ml-4 mr-4">
						<Input
							element="select"
							id="professor"
							label="Filter by Professor"
							options={OPTIONS}
							onInput={setFilter}
							defaultValue={filter}
							value={filter}
						/>
					</div>
					<div className="flex flex-wrap m-4">
						<div className="flex-auto sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
							<CourseDataChart
								data={difficultyData}
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
										display   : true,
										text      : 'Difficulty Scores',
										fontSize  : 20,
										position  : 'top',
										fontColor : 'black'
									},
									legend     : {
										display  : true,
										position : 'left',
										labels   : {
											fontColor : 'black',
											fontSize  : 16
										}
									},
									responsive : true
								}}
							/>
						</div>
						<div className="flex-auto sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
							<CourseDataChart
								data={workloadData}
								bgColors={[
									'#B21F00',
									'#0064A4',

									'#FFD200',
									'#F78D2D'
								]}
								bgColorsHover={[
									'#501800',
									'#6AA2B8',

									'#F7EB5F',
									'#F78D4D'
								]}
								labels={[
									'0-5 hours',
									'6-12 hours',
									'13-18 hours',
									'18+ hours'
								]}
								options={{
									title      : {
										display   : true,
										text      : 'Workload (hrs/week)',
										fontSize  : 20,
										fontColor : 'black'
									},
									legend     : {
										display  : true,
										position : 'right',
										labels   : {
											fontColor : 'black',
											fontSize  : 16
										}
									},
									responsive : true
								}}
							/>
						</div>
					</div>
					<Reviews reviews={reviews} />
				</div>
			)}
		</React.Fragment>
	);
};

export default CoursePage;
