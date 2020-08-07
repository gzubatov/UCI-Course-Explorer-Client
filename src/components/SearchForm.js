import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from './FormElements/Input';
import ErrorBanner from './UIElements/ErrorBanner';
import courseSearchOptions from '../util/course-options';

const SearchForm = () => {
	const [ department, setDepartment ] = useState();
	const [ course, setCourse ] = useState();
	const [ isTouched, setIsTouched ] = useState(false);
	const [ isFocused, setIsFocused ] = useState(false);
	const history = useHistory();

	const formHandler = (e) => {
		e.preventDefault();
		if (department && course) {
			history.push(`/search/${department.value}/${course}`);
		}
		else if (department) {
			history.push(`/search/${department.value}`);
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
							options={courseSearchOptions}
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
					<ErrorBanner
						header="Please Select A Department!"
						message="At minimum you must select a department to conduct a
					search."
					/>
				)}
			</form>
		</div>
	);
};

export default SearchForm;
