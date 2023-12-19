import React from 'react'

import type { IColor } from 'react-color-palette'

import type { AppState } from '../App'

interface MemeContentProps extends Omit<AppState, 'error'> {
	topColor: IColor
	bottomColor: IColor
}

const MemeContent: React.FC<MemeContentProps> = ({
	imgUrl,
	rotation,
	imgScale,
	mirrorImg,
	topText,
	bottomText,
	topColor,
	bottomColor,
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
			<h2 className="top" style={{ color: topColor.hex, transform: `rotate(${rotation}deg)` }}>
				{topText}
			</h2>
			<h2 className="bottom" style={{ color: bottomColor.hex, transform: `rotate(${rotation}deg)` }}>
				{bottomText}
			</h2>
		</div>
	)
}

export default MemeContent
