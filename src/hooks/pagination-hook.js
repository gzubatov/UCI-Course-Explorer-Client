import { useState, useEffect } from 'react';

export const usePagination = (initialRowCount, data) => {
	const [ rowCount, setRowCount ] = useState(initialRowCount);
	const [ pageCount, setPageCount ] = useState(0);
	const [ slicedData, setSlicedData ] = useState([]);

	useEffect(
		() => {
			if (data) {
				setPageCount(Math.ceil(data.length / rowCount));
				const slice = data.slice(0, rowCount);
				setSlicedData(slice);
			}
		},
		[ data, rowCount ]
	);

	const handlePageClick = ({ selected }) => {
		const offset = Math.ceil((selected + 1) * rowCount);
		const start = selected * rowCount;
		const slice = data ? data.slice(start, offset) : [];
		setSlicedData(slice);
	};

	const handleRowSelectionChange = (e) => {
		setRowCount(e.target.value);
	};

	return [
		slicedData,
		pageCount,
		setRowCount,
		setPageCount,
		handlePageClick,
		handleRowSelectionChange
	];
};
