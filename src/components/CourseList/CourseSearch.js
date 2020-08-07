import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import courseReviewsAPI from '../../util/api';

import CourseList from './CourseList';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import { usePagination } from '../../hooks/pagination-hook';

const CourseSearch = () => {
	const { department, course } = useParams();
	const [ loadedCourses, setLoadedCourses ] = useState();
	const [ isLoading, setIsLoading ] = useState(false);

	const [
		slicedData,
		pageCount,
		handlePageClick,
		handleRowSelectionChange
	] = usePagination(5, loadedCourses);

	useEffect(
		() => {
			const fetchCourses = async () => {
				setIsLoading(true);
				let results;
				if (!course) {
					const response = await courseReviewsAPI.get(
						`/api/courses/${department.toUpperCase()}`
					);
					results = response.data.courses;
				}
				else {
					const response = await courseReviewsAPI.get(
						`/api/courses/${department.toUpperCase()}/${course}`
					);
					results = response.data.course;
				}
				setLoadedCourses(results);
				setIsLoading(false);
			};
			fetchCourses();
		},
		[ department, course ]
	);

	return (
		<React.Fragment>
			{isLoading && <LoadingSpinner message="Loading..." />}
			{loadedCourses && (
				<div className="container overflow-hidden">
					<CourseList
						courses={slicedData}
						onRowChange={handleRowSelectionChange}
					/>
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
			)}
		</React.Fragment>
	);
};

export default CourseSearch;
