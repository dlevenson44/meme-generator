import React from 'react'

import { MdOutlineRotateLeft, MdOutlineRotateRight } from 'react-icons/md'

interface ImageActionControlsProps {
  onLeftRotateClick: () => void
  onRightRotateClick: () => void
  onScaleChange: (e: React.FormEvent<HTMLInputElement>) => void
  imgScale: number
}

const ImageActionControls: React.FC<ImageActionControlsProps> = ({
	onLeftRotateClick,
	onRightRotateClick,
	onScaleChange,
	imgScale,
}) => {
	return (
		<div>
			<button title="Rotate Left" onClick={onLeftRotateClick}><MdOutlineRotateLeft /></button>
			<button title="Rotate Right" onClick={onRightRotateClick}><MdOutlineRotateRight /></button>
			<input
				className="scale-img-input"
				type="number"
				placeholder="Enter Image URL To Get Started!"
				onChange={onScaleChange}
				value={imgScale}
			/>
			<span>%</span>
		</div>
	)
}

export default ImageActionControls
