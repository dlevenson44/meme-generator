import debounce from 'debounce'
import validator from 'validator'

const checkImage = (url: string) => {
	const request = new XMLHttpRequest()
	request.open('GET', url, true)
	request.send()
	request.onload = () => {
		if (request.status == 200) {
			return true
		} else {
			return false
		}
	}
}

export const imageUrlValidator = (url: string) => {
	const isValidUrl = validator.isURL(url, {
		protocols: ['http', 'https'],
		require_tld: true,
	})
	if (!isValidUrl) return false
	const imgCheck = checkImage(url)
	const isImgUrl = debounce(() => imgCheck, 500)
	return isImgUrl
}
