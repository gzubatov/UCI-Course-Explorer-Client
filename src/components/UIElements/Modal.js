import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition as ReactTransition } from 'react-transition-group';

import Backdrop from './Backdrop';

const ModalContainer = (props) => {
	const content = (
		<div
			className={`modal ${props.className ? props.className : ''}`}
			style={props.style}
		>
			<header
				className={`modal__header uppercase font-bold text-xl font-mono ${props.headerClass
					? props.headerClass
					: ''}`}
			>
				<h2>{props.header}</h2>
			</header>
			<form
				onSubmit={
					props.onSubmit ? (
						props.onSubmit
					) : (
						(event) => event.preventDefault()
					)
				}
			>
				<div
					className={`modal__content ${props.contentClass
						? props.contentClass
						: ''}`}
				>
					{props.message}
				</div>
				<div
					className={`modal__content ${props.contentClass
						? props.contentClass
						: ''}`}
				>
					{props.children}
				</div>
				<footer
					className={`modal__footer ${props.footerClass
						? props.footerClass
						: ''}`}
				>
					{props.footer}
				</footer>
			</form>
		</div>
	);
	return ReactDOM.createPortal(
		content,
		document.querySelector('#modal-hook')
	);
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <Backdrop dark onClick={props.onClick} />}
			<ReactTransition
				in={props.show}
				mountOnEnter
				unmountOnExit
				timeout={200}
				classNames="modal"
			>
				{<ModalContainer {...props} />}
			</ReactTransition>
		</React.Fragment>
	);
};

export default Modal;
