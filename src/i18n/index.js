// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json'; // English translations
import translationBn from './locales/bn/translation.json'; // Bangla translations

// Initialize i18next
i18n
	.use(initReactI18next) // Connects i18next to React
	.init({
		resources: {
			en: { translation: translationEn },
			bn: { translation: translationBn },
		},
		lng: 'en', // Default language
		fallbackLng: 'en', // Fallback language in case the translation is missing
		interpolation: {
			escapeValue: false, // React already escapes HTML
		},
	});

export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// const resources = {
// 	en: {
// 		translation: {
// 			welcome: 'Welcome',
// 			login: 'Login',
// 			signup: 'Signup',
// 		},
// 	},
// 	bn: {
// 		translation: {
// 			welcome: 'স্বাগতম',
// 			login: 'লগইন',
// 			signup: 'সাইন আপ',
// 		},
// 	},
// };

// i18n.use(initReactI18next).init({
// 	resources,
// 	lng: 'en',
// 	fallbackLng: 'en',
// 	interpolation: {
// 		escapeValue: false,
// 	},
// });

// export default i18n;
