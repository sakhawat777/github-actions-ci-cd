import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';

const AppOutlet = ({ isAuthenticated }) => {
	return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

// Add PropTypes for props validation
AppOutlet.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired, // `isAuthenticated` should be a boolean and is required
};

export default AppOutlet;
