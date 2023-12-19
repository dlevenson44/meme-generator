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
		<div className="actions-container">
			<h4>Image Control Tools</h4>
			<div className="rotate-container">
				<button className="rotate-buttons" title="Rotate Left" onClick={onLeftRotateClick}>
					Rotate Left{' '}<MdOutlineRotateLeft />
				</button>
				<button className="rotate-buttons" title="Mirror Image" onClick={onMirrorClick}>
					Mirror Image {'  '}<GoMirror />
				</button>
				<button className="rotate-buttons" title="Rotate Right" onClick={onRightRotateClick}>
					Rotate Right{' '}<MdOutlineRotateRight />
				</button>
			</div>
			<div className="scale-reset-controls">
				<input
					className="scale-img-input"
					type="number"
					placeholder="Enter Image URL To Get Started!"
					onChange={onScaleChange}
					value={imgScale}
					style={{ marginRight: '8px' }}
				/>
				<span className="input-end-adornment">%</span>
				<button title="Reset Image" onClick={onResetClick} style={{ marginLeft: '8px' }}>Reset</button>
			</div>
		</div>
	)
}

export default ImageActionControls
