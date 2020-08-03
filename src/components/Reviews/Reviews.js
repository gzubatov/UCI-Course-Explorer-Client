import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

import ReviewList from './ReviewList';

const rowOptions = [
	{ value: 5, label: '5' },
	{ value: 10, label: '10' },
	{ value: 25, label: '25' }
];

const Reviews = (props) => {
	const [ rowCount, setRowCount ] = useState(5);
	const [ pageCount, setPageCount ] = useState(0);
	const [ slicedReviews, setSlicedReviews ] = useState([]);

	useEffect(
		() => {
			if (props.reviews) {
				setPageCount(Math.ceil(props.reviews.length / rowCount));
				const slice = props.reviews.slice(0, rowCount);
				setSlicedReviews(slice);
			}
		},
		[ props.reviews, rowCount ]
	);

	const handlePageClick = (data) => {
		console.log(data);
		const selected = data.selected;
		const offset = Math.ceil((selected + 1) * rowCount);

		const start = selected * rowCount;

		const slice = props.reviews ? props.reviews.slice(start, offset) : [];
		setSlicedReviews(slice);
	};

	const handleRowSelectionChange = (e) => {
		setRowCount(e.target.value);
	};

	return (
		<div className="container mt-4 mx-auto">
			<div className="flex justify-between">
				<h3 className="font-bold text-xl">Student Tips:</h3>
				<div className="inline-block">
					<h4 className="text-l inline-block mr-2">Show</h4>{' '}
					{/* <Select options={rowOptions} defaultValue={rowOptions[0]} /> */}
					<select
						onChange={handleRowSelectionChange}
						className="inline-block border border-solid border-black  mr-2"
					>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={25}>25</option>
					</select>
					<h4 className="text-l inline-block">Entries</h4>
				</div>
			</div>
			{props.reviews && <ReviewList reviews={slicedReviews} />}
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				breakLabel={'...'}
				breakClassName={'break-me'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				containerClassName={'flex-1 flex mb-4 justify-center'}
				breakLinkClassName={
					'-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
				}
				pageLinkClassName={
					'-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
				}
				previousLinkClassName={
					'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
				}
				nextLinkClassName={
					'-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
				}
				activeLinkClassName={'paginate__active '}
				disabledClassName={'hidden'}
			/>
		</div>
	);
};

export default Reviews;
