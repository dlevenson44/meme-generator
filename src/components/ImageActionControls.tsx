import React from 'react'

import { GoMirror } from 'react-icons/go'
import { MdOutlineRotateRight } from 'react-icons/md'

interface ImageActionControlsProps {
  onRotateClick: () => void
  onScaleChange: (e: React.FormEvent<HTMLInputElement>) => void
  imgScale: number
	onMirrorClick: () => void
	onResetClick: () => void
}

const ImageActionControls: React.FC<ImageActionControlsProps> = ({
	onRotateClick,
	onScaleChange,
	imgScale,
	onMirrorClick,
	onResetClick,
}) => {
	return (
		<div className="actions-container">
			<h4>Image Control Tools</h4>
			<div className="rotate-container">
				<button className="rotate-buttons" title="Mirror Image" onClick={onMirrorClick}>
					Mirror Image {'  '}<GoMirror />
				</button>
				<button className="rotate-buttons" title="Rotate Right" onClick={onRotateClick}>
					Rotate{' '}<MdOutlineRotateRight />
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

/**
 *     width: 20%;
    position: absolute;
    margin-left: 40%;
    margin-top: 30%;
 */

export default ImageActionControls
