import React from 'react';

const ErrorBanner = ({ header, message }) => {
	return (
		<div
			className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
			role="alert"
		>
			<p className="font-bold">{header}</p>
			<p>{message}</p>
		</div>
	);
};

export default ErrorBanner;
