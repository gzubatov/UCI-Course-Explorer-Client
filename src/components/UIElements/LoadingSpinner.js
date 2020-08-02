import React from 'react';

import Backdrop from './Backdrop';

const LoadingSpinner = ({ message }) => {
	return (
		<div className="loading-spinner__overlay flex-col fixed">
			<div className="">
				<h3 className="font-bold">{message}</h3>
			</div>
			<div className="lds-dual-ring" />
		</div>
	);
	// return (
	// 	<React.Fragment>
	// 		<Backdrop />
	// 		<div className="">
	// 			<div>
	// 				<h3 className="font-bold">{message}</h3>
	// 			</div>
	// 			<div className="__spinner" />
	// 		</div>
	// 	</React.Fragment>
	// );
};

export default LoadingSpinner;
