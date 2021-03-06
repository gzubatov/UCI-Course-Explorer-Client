import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import CourseInfo from './CourseInfo';
import CourseDataChart from './CourseDataChart';
import Reviews from '../Reviews/Reviews';
import Input from '../FormElements/Input';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import NoDataDisplay from '../UIElements/NoDataDisplay';
import { CourseContext } from '../../context/course-context';
import courseReviewsAPI from '../../util/api';

const CoursePage = () => {
	const courseCtx = useContext(CourseContext);
	const [ course, setCourse ] = useState();
	const [ options, setOptions ] = useState([
		{ value: 'all', label: 'All' }
	]);
	const [ filter, setFilter ] = useState(options[0]);
	const [ difficultyData, setDifficultyData ] = useState();
	const [ workloadData, setWorkloadData ] = useState();
	const [ reviews, setReviews ] = useState();
	const [ windowWidth, setWindowSize ] = useState(window.innerWidth);
	const courseId = useParams().cid;

	const handleResize = () => {
		setWindowSize(window.innerWidth);
	};
	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(
		() => {
			const fetchCourseById = async () => {
				const response = await courseReviewsAPI.get(
					`/api/courses/id/${courseId}`
				);
				const courseData = response.data.course;
				console.log(response.data);
				const professorOptions = response.data.professorOptions;
				const profOptionsMapped = professorOptions.map((el) => {
					return {
						value : el._id,
						label : `${el.professor[0].lastName}, ${el.professor[0]
							.firstName}`
					};
				});
				setOptions((prev) => [ ...prev, ...profOptionsMapped ]);
				setCourse(courseData);
				courseCtx.setCourse(courseData);
				courseCtx.courseId = courseId;
				courseCtx.professors = profOptionsMapped;

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
				<div className="overflow-hidden min-w-full">
					<CourseInfo course={course} courseId={courseId} />
					{course.reviews.length === 0 && (
						<NoDataDisplay
							message="Sorry there is no data for this course yet!"
							showFace
						/>
					)}
					{course.reviews.length > 0 && (
						<React.Fragment>
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
								<div className="flex-auto w-screen sm:w-100 md:w-1/2 lg:w-1/2 xl:w-1/2">
									<CourseDataChart
										data={difficultyData}
										bgColors={[
											'#009432',
											'#4cd137',
											'#ffd32a',
											'#ffa801',
											'#ff3f34'
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
								<div className="flex-auto w-screen sm:w-100 md:w-1/2 lg:w-1/2 xl:w-1/2">
									<CourseDataChart
										data={workloadData}
										bgColors={[
											'#4cd137',
											'#ffd32a',
											'#ffa801',
											'#ff3f34'
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
												text      :
													'Workload (hrs/week)',
												fontSize  : 20,
												fontColor : 'black'
											},
											legend     : {
												display  : true,
												position :
													windowWidth < 768
														? 'left'
														: 'right',
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
						</React.Fragment>
					)}
				</div>
			)}
		</React.Fragment>
	);
};

export default CoursePage;
