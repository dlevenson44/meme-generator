import validator from 'validator'

const fileTypeValidation = (url: string): boolean => {
	const validFileTypes: string[] = ['.png', '.jpg', '.jpeg', '.gif']
	let validCheck = false
	validFileTypes.forEach(type => {
		const capitalized = type.toUpperCase()
		if (url.includes(type) || url.includes(capitalized)) {
			validCheck = true
		}
	})
	return validCheck
}

export const imageUrlValidator = (url: string): boolean => {
	const isValidUrl = validator.isURL(url, {
		protocols: ['http', 'https'],
		require_tld: true,
	})
	const isImgUrl = fileTypeValidation(url)
	return isValidUrl && isImgUrl
}