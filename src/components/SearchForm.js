import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from './FormElements/Input';

const OPTIONS = [
	{ value: 'compsci', label: 'COMP SCI' },
	{ value: 'inf', label: 'IN4MATX' },
	{ value: 'cgs', label: 'Computer Game Science' }
];

const SearchForm = () => {
	const [ department, setDepartment ] = useState();
	const [ course, setCourse ] = useState();
	const [ isTouched, setIsTouched ] = useState(false);
	const history = useHistory();

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
							options={OPTIONS}
							onInput={setDepartment}
							onFocus={() => setIsTouched(true)}
						/>
					</div>
					<div className="w-full md:w-1/4 px-3">
						<Input
							element="text"
							id="course number"
							label="Course Number"
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
				isTouched && (
					<h1 className="text-red-600 font-bold">
						Please choose a department!
					</h1>
				)}
			</form>
		</div>
	);
};

export default SearchForm;
