import React from 'react';

const NoDataDisplay = (props) => {
	return (
		<div className="rounded overflow-hidden shadow-lg border border-solid w-screen sm:w-screen md:w-1/2 lg:w-2/5 xl:w-2/5 m-auto mt-4">
			<h2 className="text-2xl font-bold text-center">
				Sorry there is no data for this course yet!
			</h2>
			<p className="text-center ">
				<span className="color-black text-6xl">&#9785;</span>
			</p>
			<div className={props.classes}>{props.children}</div>
		</div>
	);
};

export default NoDataDisplay;
