import React from 'react';

const NoDataDisplay = (props) => {
	return (
		<div
			className={`rounded overflow-hidden shadow-lg border border-solid m-auto mt-4 ${props.classNames
				? props.classNames
				: 'w-screen sm:w-screen md:w-1/2 lg:w-2/5 xl:w-2/5'}`}
		>
			<h2 className="text-2xl font-bold text-center">{props.message}</h2>
			{props.showFace && (
				<p className="text-center ">
					<span className="color-black text-6xl">&#9785;</span>
				</p>
			)}
			<div className={props.classes}>{props.children}</div>
		</div>
	);
};

export default NoDataDisplay;
