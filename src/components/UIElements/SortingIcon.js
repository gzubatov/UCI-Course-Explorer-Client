import React from 'react';

const SortingIcon = (props) => {
	let icon;

	if (props.ascending) {
		icon = (
			<svg
				fill="currentColor"
				viewBox="0 0 20 20"
				width={props.width}
				height={props.heigh}
				className={props.classes}
			>
				<path
					fill-rule="evenodd"
					d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		);
	}
	else if (props.descending) {
		icon = (
			<svg
				fill="currentColor"
				viewBox="0 0 20 20"
				width={props.width}
				height={props.heigh}
				className={props.classes}
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		);
	}
	else {
		icon = (
			<svg
				fill="currentColor"
				viewBox="0 0 20 20"
				width={props.width}
				height={props.heigh}
				className={props.classes}
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		);
	}

	return icon;
};

export default SortingIcon;
