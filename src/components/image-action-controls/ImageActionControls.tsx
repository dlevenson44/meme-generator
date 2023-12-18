import React from 'react'

import { MdOutlineRotateLeft, MdOutlineRotateRight } from 'react-icons/md'

interface ImageActionControlsProps {
  onLeftRotateClick: () => void
  onRightRotateClick: () => void
}

const ImageActionControls: React.FC<ImageActionControlsProps> = ({
	onLeftRotateClick,
	onRightRotateClick
}) => {
	return (
		<div>
			<button title="Rotate Left" onClick={onLeftRotateClick}><MdOutlineRotateLeft /></button>
			<button title="Rotate Right" onClick={onRightRotateClick}><MdOutlineRotateRight /></button>
		</div>
	)
}

export default ImageActionControls
