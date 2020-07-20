import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const CourseDataChart = (props) => {
	const data = {
		datasets : [
			{
				data                 : props.data,
				backgroundColor      : props.bgColors,
				hoverBackgroundColor : props.bgColorsHover
			}
		],

		// These labels appear in the legend and in the tooltips when hovering different arcs
		labels   : props.labels
	};
	return (
		<div className="w-auto">
			<Doughnut data={data} options={props.options} />
		</div>
	);
};

export default CourseDataChart;
