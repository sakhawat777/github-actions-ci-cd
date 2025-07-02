export const convertToBanglaDigits = (number) => {
	const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
	return number
		.toString()
		.split('')
		.map((digit) => banglaDigits[digit])
		.join('');
};
