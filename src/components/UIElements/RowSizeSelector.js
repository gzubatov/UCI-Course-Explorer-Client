import React from 'react';

const RowSizeSelector = ({ onRowChange, selectOptions }) => {
	const mappedOptions = selectOptions.map((el) => (
		<option key={el} value={el}>
			{el}
		</option>
	));

	return (
		<div className="flex justify-end">
			<h4 className="text-l inline-block mr-2">Show</h4>{' '}
			<select
				onChange={onRowChange}
				className="inline-block border border-solid border-black  mr-2"
			>
				{mappedOptions}
			</select>
			<h4 className="text-l inline-block">Entries</h4>
		</div>
	);
};

export default RowSizeSelector;
