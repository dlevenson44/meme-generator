import React from 'react'
import validator from 'validator'
import './App.css'

interface AppState {
	imgUrl: string
	error: boolean
}
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

const imageUrlValidator = (url: string): boolean => {
	const isValidUrl = validator.isURL(url, {
		protocols: ['http', 'https'],
		require_tld: true,
	})
	const isImgUrl = fileTypeValidation(url)
	console.log(isValidUrl && isImgUrl, isValidUrl, isImgUrl)
	return isValidUrl && isImgUrl
}

const App: React.FC = () => {
	const [state, setState] = React.useState<AppState>({
		imgUrl: '',
		error: false,
	})

	React.useEffect(() => {
		if (state.imgUrl.length) {
			const isValidImageUrl = imageUrlValidator(state.imgUrl)
			setState({ ...state, error: !isValidImageUrl })
		} else {
			setState({ ...state, error: false })
		}
	}, [state.imgUrl])

	const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
		setState({
			...state,
			imgUrl: e.currentTarget.value,
		})

	return (
		<div className="App">
			<div className="top-content">
				<h3 className="header">Meme Maker</h3>
				<input
					className="url-input"
					type="text"
					placeholder="Enter Image URL To Get Started!"
					onChange={(e) => handleChange(e)}
					value={state.imgUrl}
				/>
				{state.error && <p className="error-text">Invalid Image URL, Meme Cannot Be Made!</p>}
			</div>
			<div>
				{!state.error && !!state.imgUrl.length && (
					<img
						className="url-image"
						alt="Broken Image :("
						height={350}
						width={350}
						src={state.imgUrl}
					/>
				)}
			</div>
		</div>
	)
}

export default App
