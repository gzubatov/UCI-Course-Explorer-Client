import React, { useState, useEffect, useCallback, useMemo } from 'react';

import CourseListItem from './CourseListItem';
import RowSizeSelector from '../UIElements/RowSizeSelector';
import SortingIcon from '../UIElements/SortingIcon';

const CourseList = (props) => {
	const [ sort, setSort ] = useState({ field: 'courseNumber', order: true });
	const [ data, setData ] = useState([]);

	useEffect(
		() => {
			setData(props.courses);
		},
		[ props.courses ]
	);

	const sortListAsc = useCallback(
		() => {
			const temp = [ ...data ].sort(
				//(a, b) => (a.course < b.course ? -1 : 1)
				(a, b) => {
					if (sort.field === 'courseNumber') {
						return a.courseNumber < b.courseNumber ? -1 : 1;
					}
					else {
						return (
							a['avgRatings'][sort.field] -
							b['avgRatings'][sort.field]
						);
					}
				}
			);
			return temp;
		},
		[ data, sort.field ]
	);

	const sortListDesc = useCallback(
		() => {
			const temp = [ ...data ].sort(
				//(a, b) => (a.course < b.course ? 1 : -1)
				(a, b) => {
					if (sort.field === 'courseNumber') {
						return a.courseNumber < b.courseNumber ? 1 : -1;
					}
					else {
						return (
							b['avgRatings'][sort.field] -
							a['avgRatings'][sort.field]
						);
					}
				}
			);
			return temp;
		},
		[ data, sort.field ]
	);

	const courseData = useMemo(
		() => {
			if (sort.field) {
				if (sort.order) {
					return sortListAsc();
				}
				else {
					return sortListDesc();
				}
			}
			else {
				return data;
			}
		},
		[ data, sort.field, sort.order, sortListAsc, sortListDesc ]
	);

	const courseItems = courseData.map((course) => {
		return (
			<CourseListItem
				key={course._id}
				id={course._id}
				department={course.department}
				course={course.courseNumber}
				difficulty={course.avgRatings.avgDifficulty}
				workload={course.avgRatings.avgWorkload}
			/>
		);
	});

	console.log(sort);

	return (
		<div className="w-screen sm:w-screen md:w-1/2 lg:w-1/2 xl:w-1/2 m-auto mb-4">
			<RowSizeSelector
				onRowChange={props.onRowChange}
				selectOptions={[ 5, 10, 25, 50 ]}
			/>

			<div className="flex justify-around mt-2 mb-2 text-center font-bold">
				<div
					className="w-2/5 text-left"
					onClick={() =>
						setSort((prev) => {
							return {
								field : 'courseNumber',
								order : !prev.order
							};
						})}
				>
					Course
					{sort.field === 'courseNumber' &&
					sort.order && (
						<SortingIcon
							ascending
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
					{sort.field === 'courseNumber' &&
					!sort.order && (
						<SortingIcon
							descending
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
					{sort.field !== 'courseNumber' && (
						<SortingIcon
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
				</div>
				<div
					className="text-left"
					onClick={() =>
						setSort((prev) => {
							return {
								field : 'avgDifficulty',
								order : !prev.order
							};
						})}
				>
					Difficulty Rating
					{sort.field === 'avgDifficulty' &&
					sort.order && (
						<SortingIcon
							ascending
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
					{sort.field === 'avgDifficulty' &&
					!sort.order && (
						<SortingIcon
							descending
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
					{sort.field !== 'avgDifficulty' && (
						<SortingIcon
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
				</div>
				<div
					className="text-right"
					onClick={() =>
						setSort((prev) => {
							return {
								field : 'avgWorkload',
								order : !prev.order
							};
						})}
				>
					Workload Rating
					{sort.field === 'avgWorkload' &&
					sort.order && (
						<SortingIcon
							ascending
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
					{sort.field === 'avgWorkload' &&
					!sort.order && (
						<SortingIcon
							descending
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
					{sort.field !== 'avgWorkload' && (
						<SortingIcon
							height={20}
							width={20}
							classes="inline-block"
						/>
					)}
				</div>
			</div>
			<div className="container w-full">{courseItems}</div>
		</div>
	);
};

export default CourseList;
