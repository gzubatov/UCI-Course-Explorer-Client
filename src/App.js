import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';
import CourseList from './components/CourseList/CourseList';

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
					<CourseList />
				</div>
			</Route>
			<Route path="/:department/:course" exact>
				<div className="flex justify-center">
					<CourseList />
				</div>
			</Route>
		</BrowserRouter>
	);
};

export default App;
