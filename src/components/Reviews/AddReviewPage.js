import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import courseReviewsAPI from '../../util/api';

import LoadingSpinner from '../UIElements/LoadingSpinner';
import CourseInfo from '../Courses/CourseInfo';
import ReviewForm from '../Forms/ReviewForm';
import { CourseContext } from '../../context/course-context';
import Backdrop from '../UIElements/Backdrop';
import Modal from '../UIElements/Modal';

const AddReviewPage = () => {
	const courseContext = useContext(CourseContext);
	const [ course, setCourse ] = useState(courseContext.course);
	const [ options, setOptions ] = useState(courseContext.professors);
	const [ isSendingData, setIsSendingData ] = useState(false);
	const [ showModal, setShowModal ] = useState(false);
	const [ error, setError ] = useState();
	const courseId = useParams().cid;
	const history = useHistory();

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
				setOptions((prev) => [ ...profOptionsMapped ]);
				setCourse(courseData);
				courseContext.setCourse(courseData);
				courseContext.courseId = courseId;
				courseContext.professors = profOptionsMapped;
			};
			if (!courseContext.course) {
				fetchCourseById();
			}
		},
		[ courseContext, courseContext.course, courseId ]
	);

	const formHandler = async (data) => {
		setIsSendingData(true);
		const payload = {
			quarter            : data.quarter.value,
			year               : parseInt(data.year.value),
			review             :
				data.review.length > 0 ? data.review : undefined,
			difficulty         : parseInt(data.difficulty),
			workload           : data.workload.value,
			details            : {
				iClicker     : data.iclicker,
				groupWork    : data.groupWork,
				textbook     : data.textbook,
				heavyReading : data.heavyReading,
				curve        : data.curve
			},
			professor          : data.professor
				? data.professor.value
				: undefined,
			course             : courseId,
			professorLastName  : data.lastName,
			professorFirstName : data.firstName
		};

		if (data.grade) payload.grade = data.grade.value;
		if (data.recommend) payload.recommend = data.recommend;
		if (data.attendance) payload.attendance = data.attendance;

		let response;
		try {
			response = await courseReviewsAPI.post('/api/reviews', payload);
			setIsSendingData(false);
			if (response.status === 201) {
				setShowModal(true);
				setError(null);
			}
		} catch (e) {
			if (e.response.status === 400) {
				setIsSendingData(false);
				setShowModal(true);
				setError(e.response.data);
			}
		}
	};

	const handleModalError = (e) => {
		e.preventDefault();
		setShowModal(false);
	};

	const handleModalSuccess = (e) => {
		e.preventDefault();
		history.push('/');
	};

	return (
		<React.Fragment>
			{(!course || isSendingData) && (
				<React.Fragment>
					<Backdrop />
					<LoadingSpinner message="Loading..." />
				</React.Fragment>
			)}

			<Modal
				show={showModal}
				onClick={() => setShowModal(false)}
				header={error ? 'An Error Occurred!' : 'Success!'}
				message={
					error ? (
						error.message
					) : (
						'Thank you for submitting your review!'
					)
				}
				footer={
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						type="submit"
					>
						Close
					</button>
				}
				onSubmit={error ? handleModalError : handleModalSuccess}
			/>

			{course && (
				<div className="overflow-hidden">
					<CourseInfo course={course} />
					<ReviewForm
						professors={options}
						formHandler={formHandler}
					/>
				</div>
			)}
		</React.Fragment>
	);
};

export default AddReviewPage;
