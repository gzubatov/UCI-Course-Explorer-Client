import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	const backdropClass = props.dark ? 'backdrop-dark' : 'backdrop-light';
	return ReactDOM.createPortal(
		<div className={backdropClass} onClick={props.onClick} />,
		document.getElementById('backdrop-hook')
	);
};

export default Backdrop;
