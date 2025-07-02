import { useState } from 'react';
import AppRoutes from './AppRoutes';
import PropTypes from 'prop-types';

function App() {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const handleLogin = (data) => {
		// Mock authentication
		setAuthenticated(true);
		console.log('Logged in:', data);
	};
	return (
		<AppRoutes
			isAuthenticated={isAuthenticated}
			onLogin={handleLogin}
			onSignUp={(data) => console.log('Sign Up:', data)}
		/>
	);
}

// Add PropTypes for props validation
AppRoutes.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired, // `isAuthenticated` must be a boolean and is required
	onLogin: PropTypes.func.isRequired, // `onLogin` must be a function and is required
	onSignUp: PropTypes.func.isRequired, // `onSignUp` must be a function and is required
};

export default App;
