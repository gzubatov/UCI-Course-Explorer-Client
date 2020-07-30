import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';
import ReviewForm from './components/Forms/ReviewForm';
import CourseSearch from './components/CourseList/CourseSearch';
import CoursePage from './components/Courses/CoursePage';

const App = () => {
	return (
		<BrowserRouter>
			<HeaderNav />
			<Switch>
				<Route path="/" exact>
					<div className="flex justify-center">
						<SearchForm />
					</div>
				</Route>
				<Route path="/course/:cid">
					<div className="flex">
						<CoursePage />
					</div>
				</Route>
				<Route path="/review" exact>
					<div className="flex justify-center">
						<ReviewForm />
					</div>
				</Route>
				<Route path="/review/:department/:course" exact>
					<div className="flex justify-center">
						<ReviewForm />
					</div>
				</Route>
				<Route path="/:department" exact>
					<div className="flex justify-center">
						<SearchForm />
					</div>
					<div className="flex justify-center">
						<CourseSearch />
					</div>
				</Route>
				<Route path="/:department/:course" exact>
					<div className="flex justify-center">
						<SearchForm />
					</div>
					<div className="flex justify-center">
						<CourseSearch />
					</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
