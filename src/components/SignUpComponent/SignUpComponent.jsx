import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const schema = yup.object({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	password: yup.string().min(6).required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Confirm Password is required'),
});

const SignUpComponent = ({ onSignUp }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const { t } = useTranslation();

	return (
		<form onSubmit={handleSubmit((data) => onSignUp(data))}>
			<input {...register('name')} placeholder={t('name')} />
			<p>{errors.name?.message}</p>
			<input {...register('email')} placeholder={t('email')} />
			<p>{errors.email?.message}</p>
			<input
				type='password'
				{...register('password')}
				placeholder={t('password')}
			/>
			<p>{errors.password?.message}</p>
			<input
				type='password'
				{...register('confirmPassword')}
				placeholder={t('confirmPassword')}
			/>
			<p>{errors.confirmPassword?.message}</p>
			<button type='submit'>{t('signUp')}</button>
		</form>
	);
};

SignUpComponent.propTypes = {
	onSignUp: PropTypes.func.isRequired,
};

export default SignUpComponent;
