import React from 'react'

import { useColor } from 'react-color-palette'
import 'react-color-palette/css'

import './App.css'

import { TopContent, ImageActionControls, MemeContent, MemeTextControl } from './components'
import { imageUrlValidator } from './helpers/validations'

export interface AppState {
	imgUrl: string
	error: boolean
	rotation: number
	imgScale: number
	mirrorImg: boolean
	topText: string
	bottomText: string
}

const initialState = {
	imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*',
	error: false,
	rotation: 0,
	imgScale: 100,
	mirrorImg: false,
	topText: 'ENTER TOP TEXT HERE',
	topColor: '#FFFFFF',
	bottomText: 'ENTER BOTTOM TEXT HERE',
	bottomColor: '#FFFFFF',
}

const App: React.FC = () => {
	const [topColor, setTopColor] = useColor(initialState.topColor)
	const [bottomColor, setBottomColor] = useColor(initialState.bottomColor)
	const [state, setState] = React.useState<AppState>(initialState)

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

	const handleMemeTextChange = (e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.value.length <= 140) {
			setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
		}
	}

	return (
		<div className="App">
			<TopContent
				onChange={(e) => handleUrlChange(e)}
				imgUrl={state.imgUrl}
				error={state.error}
			/>
			{!state.error && !!state.imgUrl.length && (
				<div className="content-container">
					<MemeContent
						imgUrl={state.imgUrl}
						rotation={state.rotation}
						imgScale={state.imgScale}
						mirrorImg={state.mirrorImg}
						topText={state.topText}
						bottomText={state.bottomText}
						topColor={topColor}
						bottomColor={bottomColor}
					/>
					<MemeTextControl
						onChange={handleMemeTextChange}
						topText={state.topText}
						topColor={topColor}
						setTopColor={setTopColor}
						bottomText={state.bottomText}
						bottomColor={bottomColor}
						setBottomColor={setBottomColor}
					/>
					<ImageActionControls
						onLeftRotateClick={() => setState({ ...state, rotation: state.rotation - 90 })}
						onRightRotateClick={() => setState({ ...state, rotation: state.rotation + 90 })}
						onScaleChange={(e) => handleScaleChange(e)}
						imgScale={state.imgScale}
						onMirrorClick={() => setState({ ...state, mirrorImg: !state.mirrorImg })}
						onResetClick={() => setState(initialState)}
					/>
				</div>
			)}
		</div>
	)
}

export default App
