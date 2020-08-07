import React, { useEffect } from 'react';

import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import HeaderNav from './components/Navigation/HeaderNav';
import SearchForm from './components/SearchForm';
import ReviewForm from './components/Forms/ReviewForm';
import CourseSearch from './components/CourseList/CourseSearch';
import CoursePage from './components/Courses/CoursePage';
import AddReviewPage from './components/Reviews/AddReviewPage';
import { CourseContext } from './context/course-context';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_NO);
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
	ReactGA.pageview(location.pathname + location.search);
	console.log(location.pathname + location.search);
});

const App = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

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
			<Router history={browserHistory}>
				<HeaderNav />
				<Switch>
					<Route path="/" exact>
						<div className="flex justify-center">
							<SearchForm />
						</div>
					</Route>
					<Route path="/course/:cid" exact>
						<div className="flex justify-center">
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
			</Router>
		</CourseContext.Provider>
	);
};

export default App;
