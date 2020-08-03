import React from 'react';
import ReactPaginate from 'react-paginate';

import ReviewList from './ReviewList';
import RowSizeSelector from '../UIElements/RowSizeSelector';
import { usePagination } from '../../hooks/pagination-hook';

const Reviews = (props) => {
	const [
		slicedData,
		pageCount,
		handlePageClick,
		handleRowSelectionChange
	] = usePagination(5, props.reviews || []);

	return (
		<div className="container mt-4 mx-auto">
			<div className="flex justify-between">
				<h3 className="font-bold text-xl">Student Tips:</h3>
				<RowSizeSelector
					onRowChange={handleRowSelectionChange}
					selectOptions={[ 5, 10, 25 ]}
				/>
			</div>
			{props.reviews && <ReviewList reviews={slicedData} />}
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
