import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const LogInComponent = ({ onLogin }) => {
	const { register, handleSubmit } = useForm();
	const { t } = useTranslation();

	const onSubmit = (data) => {
		onLogin(data);
	};

	return (
		<form
			className='flex justify-center align-middle gap-3'
			onSubmit={handleSubmit(onSubmit)}>
			<input
				className='border-2 border-red-800 text-center'
				{...register('email')}
				placeholder={t('email')}
				required
			/>
			<input
				className='border-2 border-red-800 text-center'
				type='password'
				{...register('password')}
				placeholder={t('password')}
				required
			/>
			<button type='submit'>{t('login')}</button>
		</form>
	);
};

// Add PropTypes for props validation
LogInComponent.propTypes = {
	onLogin: PropTypes.func.isRequired, // `onLogin` should be a function and is required
};

export default LogInComponent;
