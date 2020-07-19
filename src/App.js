import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';
import CourseSearch from './components/CourseList/CourseSearch';

const App = () => {
	return (
		<BrowserRouter>
			<HeaderNav />
			<Route path="/">
				<div className="flex justify-center">
					<SearchForm />
				</div>
			</Route>
			<Route path="/:department" exact>
				<div className="flex justify-center">
					<CourseSearch />
				</div>
			</Route>
			<Route path="/:department/:course" exact>
				<div className="flex justify-center">
					<CourseSearch />
				</div>
			</Route>
		</BrowserRouter>
	);
};

export default App;
