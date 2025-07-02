import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorComponent from './components/ErrorComponent';
import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';

// Lazy-loaded components
import AppOutlet from './outlets/AppOutlet';
import UnauthorizedOutlet from './outlets/UnauthorizedOutlet';
const LogInComponent = lazy(() => import('./components/LogInComponent'));
const SignUpComponent = lazy(() =>
	import('./components/SignUpComponent/SignUpComponent')
);

const AppRoutes = ({ isAuthenticated, onLogin, onSignUp }) => (
	<Router>
		<Layout>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path='/login'
						element={<LogInComponent onLogin={onLogin} />}
					/>
					<Route
						path='/signup'
						element={<SignUpComponent onSignUp={onSignUp} />}
					/>
					<Route
						path='/'
						element={<AppOutlet isAuthenticated={isAuthenticated} />}>
						<Route index element={<h1>Home</h1>} />
						<Route path='profile' element={<h1>Profile</h1>} />
					</Route>
					<Route path='/unauthorized' element={<UnauthorizedOutlet />} />
					<Route
						path='*'
						element={<ErrorComponent message='Page not found' />}
					/>
				</Routes>
			</Suspense>
		</Layout>
	</Router>
);

// Add PropTypes for props validation
AppRoutes.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired, // `isAuthenticated` should be a boolean and is required
	onLogin: PropTypes.func.isRequired, // `onLogin` should be a function and is required
	onSignUp: PropTypes.func.isRequired, // `onSignUp` should be a function and is required
};

export default AppRoutes;
