import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../FormElements/Input';

const OPTIONS = [
	{ value: 'compsci', label: 'COMP SCI' },
	{ value: 'inf', label: 'IN4MATX' },
	{ value: 'cgs', label: 'Computer Game Science' }
];

const ReviewForm = () => {
	const { department: dept, course: courseNumber } = useParams();
	const [ department, setDepartment ] = useState();
	const [ course, setCourse ] = useState();
	const [ isTouched, setIsTouched ] = useState(false);
	const [ isFocused, setIsFocused ] = useState(false);
	const history = useHistory();

	useEffect(
		() => {
			console.log(dept, courseNumber);
			if (dept && courseNumber) {
				const selectedOption = OPTIONS.filter((o) => o.value === dept);
				console.log(selectedOption[0]);
				console.log(OPTIONS[0]);
				setDepartment(selectedOption[0]);
			}
		},
		[ dept, courseNumber, department ]
	);

	const formHandler = (e) => {
		e.preventDefault();
		if (department && course) {
			history.push(`/${department.value}/${course}`);
		}
		else if (department) {
			history.push(`/${department.value}`);
		}
		else {
			setIsTouched(true);
			setIsFocused(true);
		}
	};

	return (
		<div className="w-full max-w-xl">
			<form
				className="bg-white  rounded px-8 pt-6 pb-4 mb-4"
				onSubmit={formHandler}
			>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<Input
							element="select"
							id="departments"
							label="Departments"
							defaultValue={department}
							options={OPTIONS}
							onInput={setDepartment}
							onFocus={() => setIsTouched(true)}
							onBlur={() => setIsFocused(true)}
						/>
					</div>
					<div className="w-full md:w-1/4 px-3">
						<Input
							element="text"
							id="course number"
							label="Course Number"
							defaultValue={courseNumber ? courseNumber : ''}
							options={OPTIONS}
							onInput={setCourse}
							classes="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						/>
					</div>
					<div className="w-full md:w-1/4 px-3 mt-1">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
						>
							SEARCH
						</button>
					</div>
				</div>
				{!department &&
				isTouched &&
				isFocused && (
					<div
						className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
						role="alert"
					>
						<p className="font-bold">Please Select A Department!</p>
						<p>
							At minimum you must select a department to conduct a
							search.
						</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default ReviewForm;
