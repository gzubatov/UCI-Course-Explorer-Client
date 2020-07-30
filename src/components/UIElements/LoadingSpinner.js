import React from 'react';

const LoadingSpinner = ({ message }) => {
	return (
		<div>
			<div>
				<h3 className="font-bold">{message}</h3>
			</div>
			<div className="__spinner" />
		</div>
	);
};

export default LoadingSpinner;
