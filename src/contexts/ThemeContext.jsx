import PropTypes from 'prop-types';
import { createContext, useState, useContext, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};

	// Memoize the context value to prevent unnecessary re-renders
	const contextValue = useMemo(
		() => ({ isDarkMode, toggleTheme }),
		[isDarkMode]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			<div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

// Corrected propTypes declaration
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);
