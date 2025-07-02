import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => (
	<div>
		<h1>Error</h1>
		<p>{message}</p>
	</div>
);

// Add PropTypes for props validation
ErrorComponent.propTypes = {
	message: PropTypes.string.isRequired, // `message` should be a string and is required
};

export default ErrorComponent;
