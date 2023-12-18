import React from 'react'

interface TopContentProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  imgUrl: string
  error: boolean
}

const TopContent: React.FC<TopContentProps> = ({
	onChange,
	imgUrl,
	error,
}) => {
	return (
		<div className="top-content">
			<h3 className="header">Meme Maker</h3>
			<input
				className="url-input"
				type="text"
				placeholder="Enter Image URL To Get Started!"
				onChange={onChange}
				value={imgUrl}
			/>
			{error && <p className="error-text">Invalid Image URL, Meme Cannot Be Made!</p>}
		</div>
	)
}

export default TopContent
