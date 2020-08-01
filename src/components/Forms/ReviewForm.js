import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import ErrorBanner from '../UIElements/ErrorBanner';
import courseReviewsAPI from '../../util/api';

const workloadOptions = [
	{ value: 0, label: '0-5 hours' },
	{ value: 1, label: '6-12 hours' },
	{ value: 2, label: '13-18 hours' },
	{ value: 3, label: '+18 hours' }
];

const quarterOptions = [
	{ value: 'Fall', label: 'Fall' },
	{ value: 'Winter', label: 'Winter' },
	{ value: 'Spring', label: 'Spring' },
	{ value: 'Summer (10 week)', label: 'Summer (10 week)' },
	{ value: 'Summer (5 week)', label: 'Summer (5 week)' }
];

const yearOptions = [
	{ value: '2020', label: '2020' },
	{ value: '2019', label: '2019' },
	{ value: '2018', label: '2018' },
	{ value: '2017', label: '2017' },
	{ value: '2016', label: '2016' }
];

const gradeOptions = [
	{ value: 'A+', label: 'A+' },
	{ value: 'A', label: 'A' },
	{ value: 'A-', label: 'A-' },
	{ value: 'B+', label: 'B+' },
	{ value: 'B', label: 'B' },
	{ value: 'B-', label: 'B-' },
	{ value: 'C+', label: 'C+' },
	{ value: 'C', label: 'C' },
	{ value: 'C-', label: 'C-' },
	{ value: 'D+', label: 'D+' },
	{ value: 'D', label: 'D' },
	{ value: 'D-', label: 'D-' },
	{ value: 'F', label: 'F' },
	{ value: 'P', label: 'P' },
	{ value: 'NP', label: 'NP' }
];

const ReviewForm = (props) => {
	const [ addProfessor, setAddProfessor ] = useState(false);
	const [ professorOptions, setProfessorOptions ] = useState([]);
	const { register, handleSubmit, control, errors, watch } = useForm();
	const history = useHistory();

	useEffect(() => {
		const fetchProfessors = async () => {
			const response = await courseReviewsAPI.get('/api/professors');
			const profOptionsMapped = response.data.professors.map((el) => {
				return {
					value : el._id,
					label : `${el.lastName}, ${el.firstName}`
				};
			});
			setProfessorOptions(profOptionsMapped);
		};
		fetchProfessors();
	}, []);

	const formHandler = (data) => {
		console.log(data);
	};

	const handleAddProfClick = (e) => {
		e.preventDefault();
		setAddProfessor((prev) => !prev);
	};

	return (
		<div className="w-full">
			<form
				className="bg-white rounded shadow-lg px-8 pt-6 pb-4 mb-4 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 m-auto"
				onSubmit={handleSubmit(formHandler)}
			>
				<h2 className="mb-4 border border-solid border-black border-t-0 border-l-0 border-r-0">
					Required
				</h2>
				<div className="mb-4">
					<label className="font-bold">Professor</label>
					<p>
						Don't see your professor listed? Add them.{' '}
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
							onClick={handleAddProfClick}
						>
							{addProfessor ? 'Hide' : '+ Add'} New Professor
						</button>
					</p>
					{!addProfessor && (
						<Controller
							as={Select}
							name="professor"
							control={control}
							options={professorOptions}
							rules={{ required: !addProfessor }}
							className="sm:w-full md:w-64 lg:w-64 xl:w-64"
							isDisabled={addProfessor}
						/>
					)}
					{addProfessor && (
						<div>
							<p>
								Please enter the name of the professor you would
								like to add. (Check spelling please!)
							</p>
							<div className="flex flex-wrap">
								<div className="w-48 inline-block mr-6">
									<label className="font-bold">
										Last Name
									</label>
									<input
										type="text"
										name="lastName"
										ref={register({
											required : addProfessor
										})}
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									/>
								</div>
								<div className="w-48 inline-block mr-6">
									<label className="font-bold">
										First Name
									</label>
									<input
										type="text"
										name="firstName"
										ref={register({
											required : addProfessor
										})}
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									/>
								</div>
							</div>
						</div>
					)}
					{(errors.professor ||
						(errors.lastName || errors.firstName)) && (
						<ErrorBanner
							header="Required!"
							message="You must select a professor to submit a review."
						/>
					)}
				</div>
				<div className="mb-4">
					<h4 className="font-bold">How difficult is this course?</h4>
					<div className="w-screen">
						<p className="block sm:block md:inline-block lg:inline-block xl:inline-block  mr-12">
							Anyone can get an A
						</p>
						<div className="block sm:block md:inline-block lg:inline-block xl:inline-block mr-5">
							<input
								className="mr-2"
								type="radio"
								name="difficulty"
								value={1}
								ref={register({ required: true })}
							/>1
						</div>
						<div className="block sm:block md:inline-block lg:inline-block xl:inline-block   mr-5">
							<input
								className="mr-2"
								type="radio"
								name="difficulty"
								value={2}
								ref={register({ required: true })}
							/>2
						</div>
						<div className="block sm:block md:inline-block lg:inline-block xl:inline-block   mr-5">
							<input
								className="mr-2"
								type="radio"
								name="difficulty"
								value={3}
								ref={register({ required: true })}
							/>3
						</div>
						<div className="block sm:block md:inline-block lg:inline-block xl:inline-block   mr-5">
							<input
								className="mr-2"
								type="radio"
								name="difficulty"
								value={4}
								ref={register({ required: true })}
							/>4
						</div>
						<div className="block sm:block md:inline-block lg:inline-block xl:inline-block   mr-12">
							<input
								className="mr-2"
								type="radio"
								name="difficulty"
								value={5}
								ref={register({ required: true })}
							/>5
						</div>
						<p className="block sm:block md:inline-block lg:inline-block xl:inline-block  ">
							Prepare to get wrecked!
						</p>
					</div>
					{errors.difficulty && (
						<ErrorBanner
							header="Required!"
							message="You must rate the course difficulty to submit a review."
						/>
					)}
				</div>

				<div className="mb-4">
					<label className="font-bold">
						<h4 className="font-bold">
							How much time outside of lecture did you spend per
							week on average for this course?
						</h4>
					</label>
					<Controller
						as={Select}
						name="workload"
						control={control}
						options={workloadOptions}
						rules={{ required: true }}
						className="w-full sm:w-full md:w-1/4 lg:w-1/6 xl:w-1/6"
					/>
					{errors.workload && (
						<ErrorBanner
							header="Required!"
							message="You must rate the course workload to submit a review."
						/>
					)}
				</div>
				<div className="mb-4">
					<h4 className="font-bold">
						When did you take this course?
					</h4>
					<div className="flex flex-wrap">
						<div className="w-48 inline-block mr-6">
							<label className="font-bold">
								<h4 className="font-bold">Quarter</h4>
							</label>
							<Controller
								as={Select}
								name="quarter"
								control={control}
								options={quarterOptions}
								rules={{ required: true }}
								className="w-full sm:w-full md:w-48 lg:w-48 xl:w-48"
							/>
						</div>
						<div className="w-24 inline-block">
							<label className="font-bold">
								<h4 className="font-bold">Year</h4>
							</label>
							<Controller
								as={Select}
								name="year"
								control={control}
								options={yearOptions}
								rules={{ required: true }}
								className="w-full sm:w-full md:w-24 lg:w-24 xl:w-24"
							/>
						</div>
					</div>
					{(errors.quarter || errors.year) && (
						<ErrorBanner
							header="Required!"
							message="You must select the quarter you took the class to submit a review."
						/>
					)}
				</div>

				<h2 className="mb-4 border border-solid border-black border-t-0 border-l-0 border-r-0">
					Optional{' '}
					<span className="hidden sm:hidden md:inline-block lg:inline-block xl:inline-block">
						(Answer as many or as few as you would like)
					</span>
				</h2>

				<div className="mb-4">
					<label className="font-bold">
						<h4 className="font-bold">Course Review</h4>
					</label>
					<p>
						Tell your fellow Anteaters what you thought of the
						course and any tips you have for how to do well in the
						class.
					</p>
					<textarea
						name="review"
						ref={register}
						placeholder="Course review or tips for other students..."
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					/>
				</div>

				<div className="mb-4">
					<label className="font-bold">
						<h4 className="font-bold">
							Do you recommend this course?
						</h4>
					</label>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="radio"
							name="recommend"
							value={true}
							ref={register}
						/>Yes
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="radio"
							name="recommend"
							value={false}
							ref={register}
						/>No
					</div>
				</div>

				<div className="mb-4">
					<label className="font-bold">
						<h4 className="font-bold">Grade Received</h4>
					</label>
					<Controller
						as={Select}
						name="grade"
						control={control}
						options={gradeOptions}
						className="w-24"
					/>
				</div>

				<div className="mb-4">
					<label className="font-bold">
						<h4 className="font-bold">Attendance</h4>
					</label>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="radio"
							name="attendance"
							value="Required"
							ref={register}
						/>Required
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="radio"
							name="attendance"
							value="Recommended"
							ref={register}
						/>Recommended
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="radio"
							name="attendance"
							value="Not Required"
							ref={register}
						/>Not Required
					</div>
				</div>

				<div className="mb-4">
					<label className="font-bold">
						<h4 className="font-bold">
							Please select any of the following that applied to
							your class:
						</h4>
					</label>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="checkbox"
							name="iclicker"
							id="iclicker"
							ref={register}
						/>
						<label htmlFor="iclicker">iClicker Used</label>
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="checkbox"
							name="groupWork"
							id="groupWork"
							ref={register}
						/>
						<label htmlFor="groupWork">Group Work</label>
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="checkbox"
							name="textbook"
							id="textbook"
							ref={register}
						/>
						<label htmlFor="textbook">Textbook Required</label>
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="checkbox"
							name="heavyReading"
							id="heavyReading"
							ref={register}
						/>
						<label htmlFor="heavyReading">Heavy Reading</label>
					</div>
					<div className="inline-block mr-12">
						<input
							className="mr-2"
							type="checkbox"
							name="curve"
							id="curve"
							ref={register}
						/>
						<label htmlFor="curve">Class Curved</label>
					</div>
				</div>

				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					Submit Review
				</button>
			</form>
		</div>
	);
};

export default ReviewForm;
