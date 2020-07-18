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
				/>
			);
			break;
		case 'textarea':
			element = (
				<input
					type="textarea"
					id={props.id}
					onChange={inputChangeHandler}
				/>
			);
			break;
		default:
			element = (
				<input
					type="text"
					id={props.id}
					onChange={inputChangeHandler}
				/>
			);
			break;
	}

	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
		</div>
	);
};

export default Input;
