import React from 'react';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';

const App = () => {
	return (
		<div>
			<HeaderNav />
			<h1 className="text-3xl">App</h1>
			<SearchForm />
		</div>
	);
};

export default App;
