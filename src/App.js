import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';

const App = () => {
	return (
		<BrowserRouter>
			<HeaderNav />
			<Route path="/" exact>
				<div className="flex justify-center">
					<SearchForm />
				</div>
			</Route>
		</BrowserRouter>
	);
};

export default App;
