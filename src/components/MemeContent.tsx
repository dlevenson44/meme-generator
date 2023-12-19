import React from 'react'

import type { AppState } from '../App'

type MemeContentProps = Omit<AppState, 'error'>

const MemeContent: React.FC<MemeContentProps> = ({
	imgUrl,
	rotation,
	imgScale,
	mirrorImg,
	topText,
	bottomText
}) => {
	return (
		<div className="img-container">
			<img
				className="url-image"
				style={{
					transform: `rotate(${rotation}deg) scaleX(${mirrorImg ? 1 : -1})`,
					maxHeight: `${imgScale}%`,
					maxWidth: `${imgScale}%`
				}}
				alt="Broken Image :("
				src={imgUrl}
			/>
			<h2 className='top'>{topText}</h2>
			<h2 className='bottom'>{bottomText}</h2>
		</div>
	)
}

export default MemeContent
