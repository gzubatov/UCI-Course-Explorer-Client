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
			<Route path="/:department" exact>
				<div className="flex justify-center">
					<h1>{`Hello from just department`}</h1>
				</div>
			</Route>
			<Route path="/:department/:course" exact>
				<div className="flex justify-center">
					<h1>{`Hello from department and course`}</h1>
				</div>
			</Route>
		</BrowserRouter>
	);
};

export default App;
