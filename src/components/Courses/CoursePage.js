import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import courseReviewsAPI from '../../util/api';

import CourseInfo from './CourseInfo';
import CourseDataChart from './CourseDataChart';
import Reviews from '../Reviews/Reviews';
import Input from '../FormElements/Input';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import { CourseContext } from '../../context/course-context';

const OPTIONS = [
	{ value: 'all', label: 'All' },
	{ value: '5f190b318b79ca76c6529417', label: 'Martins, Alberto' },
	{ value: '5f1a0973bfaf9b9955d1019a', label: 'Klefstad, Raymond' }
];

const CoursePage = () => {
	const courseCtx = useContext(CourseContext);
	const [ course, setCourse ] = useState();
	const [ options, setOptions ] = useState([
		{ value: 'all', label: 'All' }
	]);
	const [ filter, setFilter ] = useState(OPTIONS[0]);
	const [ difficultyData, setDifficultyData ] = useState();
	const [ workloadData, setWorkloadData ] = useState();
	const [ reviews, setReviews ] = useState();
	const courseId = useParams().cid;

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
				courseCtx.setCourse(courseData);
				courseCtx.courseId = courseId;

				setReviews(courseData.reviews);

				const tempDiff = [ 0, 0, 0, 0, 0 ];
				const tempWorkload = [ 0, 0, 0, 0 ];
				courseData.reviews.forEach((review) => {
					tempDiff[review.difficulty - 1]++;
					tempWorkload[review.workload - 1]++;
				});
				setDifficultyData(tempDiff);
				setWorkloadData(tempWorkload);
			};
			fetchCourseById();
		},
		[ courseCtx, courseId ]
	);

	useEffect(
		() => {
			let filteredReviews = [];
			const tempDiff = [ 0, 0, 0, 0, 0 ];
			const tempWorkload = [ 0, 0, 0, 0 ];

			if (course) {
				if (filter.value === 'all') {
					course.reviews.forEach((review) => {
						tempDiff[review.difficulty - 1]++;
						tempWorkload[review.workload - 1]++;
					});
					filteredReviews = course.reviews;
				}
				else {
					filteredReviews = course.reviews.filter(
						(review) => review.professor._id === filter.value
					);
				}

				setReviews(filteredReviews);

				filteredReviews.forEach((review) => {
					tempDiff[review.difficulty - 1]++;
					tempWorkload[review.workload - 1]++;
				});

				setDifficultyData(tempDiff);
				setWorkloadData(tempWorkload);
			}
		},
		[ course, filter ]
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
					<CourseInfo course={course} courseId={courseId} />
					<div className="max-w-sm ml-4 mr-4">
						<Input
							element="select"
							id="professor"
							label="Filter by Professor"
							options={options}
							onInput={setFilter}
							defaultValue={filter}
							value={filter}
						/>
					</div>
					<div className="flex flex-wrap m-4">
						<div className="flex-auto sm:w-100 md:w-1/2 lg:w-1/2 xl:w-1/2">
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
									'Easy A',
									'Mostly easy',
									'Kinda hard',
									'Very challenging',
									'Prepare to be wrecked'
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
						<div className="flex-auto sm:w-100 md:w-1/2 lg:w-1/2 xl:w-1/2">
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
					</div>
					<Reviews reviews={reviews} />
				</div>
			)}
		</React.Fragment>
	);
};

export default CoursePage;
