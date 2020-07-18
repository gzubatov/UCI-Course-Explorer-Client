import React from 'react';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';

const App = () => {
	return (
		<div>
			<HeaderNav />
			<div className="flex justify-center">
				<SearchForm />
			</div>
		</div>
	);
};

export default App;
