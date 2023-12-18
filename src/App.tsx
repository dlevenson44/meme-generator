import React from 'react'
import './App.css'

import { TopContent } from './components'
import { imageUrlValidator } from './helpers/validations'

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
			<TopContent
				onChange={(e) => handleChange(e)}
				imgUrl={state.imgUrl}
				error={state.error}
			/>
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
