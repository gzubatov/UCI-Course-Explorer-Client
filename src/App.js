import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';
import ReviewForm from './components/Forms/ReviewForm';
import CourseSearch from './components/CourseList/CourseSearch';
import CoursePage from './components/Courses/CoursePage';
import AddReviewPage from './components/Reviews/AddReviewPage';
import { CourseContext } from './context/course-context';

const App = () => {
	return (
		<CourseContext.Provider
			value={{
				course     : null,
				courseId   : null,
				professors : null,
				setCourse  : function(newCourse) {
					this.course = newCourse;
				}
			}}
		>
			<BrowserRouter>
				<HeaderNav />
				<Switch>
					<Route path="/" exact>
						<div className="flex justify-center">
							<SearchForm />
						</div>
					</Route>
					<Route path="/course/:cid" exact>
						<div className="flex">
							<CoursePage />
						</div>
					</Route>
					<Route path="/course/:cid/review" exact>
						<div className="">
							<AddReviewPage />
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
					<Route path="/search/:department" exact>
						<div className="flex justify-center">
							<SearchForm />
						</div>
						<div className="flex justify-center">
							<CourseSearch />
						</div>
					</Route>
					<Route path="/search/:department/:course" exact>
						<div className="flex justify-center">
							<SearchForm />
						</div>
						<div className="flex justify-center">
							<CourseSearch />
						</div>
					</Route>
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</CourseContext.Provider>
	);
};

export default App;
