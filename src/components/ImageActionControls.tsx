import React from 'react'

import { GoMirror } from 'react-icons/go'
import { MdOutlineRotateLeft, MdOutlineRotateRight } from 'react-icons/md'

interface ImageActionControlsProps {
  onLeftRotateClick: () => void
  onRightRotateClick: () => void
  onScaleChange: (e: React.FormEvent<HTMLInputElement>) => void
  imgScale: number
	onMirrorClick: () => void
	onResetClick: () => void
}

const ImageActionControls: React.FC<ImageActionControlsProps> = ({
	onLeftRotateClick,
	onRightRotateClick,
	onScaleChange,
	imgScale,
	onMirrorClick,
	onResetClick,
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
			<span className="input-end-adornment">%</span>
			<button title="Mirror Image" onClick={onMirrorClick}><GoMirror /></button>
			<button title="Reset Image" onClick={onResetClick}>Reset</button>
		</div>
	)
}

export default ImageActionControls
