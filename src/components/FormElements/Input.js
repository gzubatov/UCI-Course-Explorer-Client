import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const Input = (props) => {
	const [ value, setValue ] = useState(props.defaultValue || null);

	useEffect(
		() => {
			props.onInput(value);
		},
		[ props, value ]
	);

	const selectChangeHandler = (e) => {
		setValue(e);
	};

	const inputChangeHandler = (e) => {
		setValue(e.target.value);
	};

	let element;

	switch (props.element) {
		case 'select':
			element = (
				<Select
					options={props.options}
					inputId={props.id}
					defaultValue={props.defaultValue}
					onChange={selectChangeHandler}
					value={value}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
				/>
			);
			break;
		case 'textarea':
			element = (
				<input
					type="textarea"
					id={props.id}
					onChange={inputChangeHandler}
					className={`${props.classes}`}
					onFocus={props.onFocus}
				/>
			);
			break;
		default:
			element = (
				<input
					type="text"
					id={props.id}
					onChange={inputChangeHandler}
					className={`${props.classes}`}
					onFocus={props.onFocus}
					defaultValue={props.defaultValue}
				/>
			);
			break;
	}

	return (
		<React.Fragment>
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor={props.id}
			>
				{props.label}
			</label>
			{element}
		</React.Fragment>
	);
};

export default Input;
