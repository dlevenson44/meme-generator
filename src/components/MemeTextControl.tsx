import React from 'react'

interface MemeTextControlProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  topText: string
  bottomText: string
}

const MemeTextControl: React.FC<MemeTextControlProps> = ({
	onChange,
	topText,
	bottomText,
}) => {
	console.log('tt: ', topText)
	return (
		<div className="text-control-container">
			<div className="text-control" id="top-text-control">
				<input
					className="meme-text-control"
					type="text"
					name="topText"
					value={topText}
					onChange={onChange}
				/>
			</div>
			<div className="text-control">
				<input
					className="meme-text-control"
					type="text"
					name="bottomText"
					value={bottomText}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default MemeTextControl
