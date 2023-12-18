import React from 'react'
import './App.css'

import { TopContent, ImageActionControls } from './components'
import { imageUrlValidator } from './helpers/validations'

interface AppState {
	imgUrl: string
	error: boolean
	rotation: number
}

const App: React.FC = () => {
	const [state, setState] = React.useState<AppState>({
		imgUrl: '',
		error: false,
		rotation: 0
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
				<ImageActionControls
					onLeftRotateClick={() => setState({ ...state, rotation: state.rotation - 90 })}
					onRightRotateClick={() => setState({ ...state, rotation: state.rotation + 90 })}
				/>
				{!state.error && !!state.imgUrl.length && (
					<div>
						{/* <ImageActionControls /> */}
						<img
							className="url-image"
							style={{ transform: `rotate(${state.rotation}deg)` }}
							alt="Broken Image :("
							height={350}
							width={350}
							src={state.imgUrl}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
