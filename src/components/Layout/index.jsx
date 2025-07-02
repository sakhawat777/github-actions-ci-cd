import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { currentYear } from '../../constants/date';
import { convertToBanglaDigits } from '../../utils/convertToBanglaDigits';
const Layout = ({ children }) => {
	const { t, i18n } = useTranslation(); // Use the hook to get translation functions
	const { isDarkMode, toggleTheme } = useTheme();
	const toggleLanguage = () => {
		// Toggle between English and Bangla
		i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en');
	};
	const banglaYear = convertToBanglaDigits(currentYear);
	return (
		<div className='text-center'>
			<header>
				<h1 className='text-center'>{t('myApp')}</h1>
				<button onClick={toggleTheme}>
					{isDarkMode
						? `${t('switchToLightMode')}`
						: `${t('switchToDarkMode')}`}
				</button>
				<h1>{t('welcome')}</h1>
				{/* Use the `t` function to translate the key */}
				<button onClick={toggleLanguage}>
					{i18n.language === 'en'
						? 'Switch to Bangla'
						: `${t('switchToEnglish')}`}
				</button>
			</header>
			<main>{children}</main>
			<footer>
				{t('footerText', {
					year: i18n.language === 'bn' ? banglaYear : currentYear,
				})}
			</footer>
		</div>
	);
};

// Add PropTypes for props validation
Layout.propTypes = {
	children: PropTypes.node.isRequired, // `children` should be a React node and is required
};

export default Layout;
