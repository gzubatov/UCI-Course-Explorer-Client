import React from 'react';

const HeaderNav = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap p-6 __header-nav">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-semibold text-xl tracking-tight">
					UCI Course Explorer
				</span>
			</div>
		</nav>
	);
};

export default HeaderNav;
