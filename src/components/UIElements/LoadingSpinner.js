import React from 'react';

const LoadingSpinner = ({ message }) => {
	return (
		<div className="loading-spinner__overlay flex-col fixed">
			<div className="">
				<h3 className="font-bold">{message}</h3>
			</div>
			<div className="lds-dual-ring" />
		</div>
	);
};

export default LoadingSpinner;
