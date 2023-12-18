import React from 'react'
import validator from 'validator'
import './App.css'

interface AppState {
	imgUrl: string
	error: boolean
}

const App: React.FC = () => {
	const [state, setState] = React.useState<AppState>({
		imgUrl: '',
		error: false,
	})

	React.useEffect(() => {
		if (state.imgUrl.length) {
			const isValidImageUrl = validator.isURL(state.imgUrl, {
				protocols: ['http', 'https'],
				require_tld: true,
			})
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
						alt="Image Error"
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
