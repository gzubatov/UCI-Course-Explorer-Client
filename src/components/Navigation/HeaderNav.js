import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6 __header-nav">
			<div className="flex items-center flex-shrink-0 mr-6">
				<Link to="/">
					<span className="font-mono font-semibold text-xl tracking-tight">
						Zot Reviews
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default HeaderNav;
