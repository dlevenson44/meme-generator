import React from 'react'
import './App.css'

import { TopContent, ImageActionControls } from './components'
import { imageUrlValidator } from './helpers/validations'

interface AppState {
	imgUrl: string
	error: boolean
	rotation: number
	imgScale: number
	mirrorImg: boolean
}

const App: React.FC = () => {
	const [state, setState] = React.useState<AppState>({
		imgUrl: '',
		error: false,
		rotation: 0,
		imgScale: 100,
		mirrorImg: false,
	})

	React.useEffect(() => {
		if (state.imgUrl.length) {
			const isValidImageUrl = imageUrlValidator(state.imgUrl)
			setState({ ...state, error: !isValidImageUrl })
		} else {
			setState({ ...state, error: false })
		}
	}, [state.imgUrl])

	const handleUrlChange = (e: React.FormEvent<HTMLInputElement>) =>
		setState({
			...state,
			imgUrl: e.currentTarget.value,
		})

	const handleScaleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const castValue = Number(e.currentTarget.value)
		// Keep image scaling between 0 and 200%
		if ((castValue <= 200 && castValue >= 0)) {
			setState({
				...state,
				imgScale: castValue,
			})
		}
	}

	return (
		<div className="App">
			<TopContent
				onChange={(e) => handleUrlChange(e)}
				imgUrl={state.imgUrl}
				error={state.error}
			/>
			<div>
				{!state.error && !!state.imgUrl.length && (
					<div>
						<ImageActionControls
							onLeftRotateClick={() => setState({ ...state, rotation: state.rotation - 90 })}
							onRightRotateClick={() => setState({ ...state, rotation: state.rotation + 90 })}
							onScaleChange={(e) => handleScaleChange(e)}
							imgScale={state.imgScale}
							onMirrorClick={() => setState({ ...state, mirrorImg: !state.mirrorImg })}
						/>
						<div className="img-container">
							<img
								className="url-image"
								style={{
									transform: `rotate(${state.rotation}deg) scaleX(${state.mirrorImg ? 1 : -1})`,
									maxHeight: `${state.imgScale}%`,
									maxWidth: `${state.imgScale}%`
								}}
								alt="Broken Image :("
								src={state.imgUrl}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
