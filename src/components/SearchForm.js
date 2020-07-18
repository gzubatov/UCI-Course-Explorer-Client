import React, { useState } from 'react';

import Input from './FormElements/Input';

const OPTIONS = [
	{ value: 'compsci', label: 'COMP SCI' },
	{ value: 'inf', label: 'IN4MATX' },
	{ value: 'cgs', label: 'Computer Game Science' }
];

const SearchForm = () => {
	const [ department, setDepartment ] = useState();
	const [ course, setCourse ] = useState();

	const formHandler = (e) => {
		e.preventDefault();
		console.log(department, course);
	};

	return (
		<form onSubmit={formHandler}>
			<Input
				element="select"
				id="departments"
				label="Departments"
				options={OPTIONS}
				onInput={setDepartment}
			/>
			<Input
				element="textarea"
				id="course number"
				label="Course Number"
				options={OPTIONS}
				onInput={setCourse}
			/>

			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				SEARCH
			</button>
		</form>
	);
};

export default SearchForm;
