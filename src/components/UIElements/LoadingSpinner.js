import React from 'react';

import Backdrop from './Backdrop';

const LoadingSpinner = ({ message }) => {
	return (
		<div>
			<Backdrop />
			<div>
				<h3 className="font-bold">{message}</h3>
			</div>
			<div className="__spinner" />
		</div>
	);
};

export default LoadingSpinner;
