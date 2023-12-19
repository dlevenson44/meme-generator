import React from 'react'
import type { Dispatch, SetStateAction } from 'react'

import { ColorPicker, IColor } from 'react-color-palette'
import 'react-color-palette/css'

interface MemeTextControlProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  topText: string
	topColor: IColor
	setTopColor: Dispatch<SetStateAction<IColor>>
  bottomText: string
	bottomColor: IColor
	setBottomColor: Dispatch<SetStateAction<IColor>>
}

const MemeTextControl: React.FC<MemeTextControlProps> = ({
	onChange,
	topText,
	topColor,
	setTopColor,
	bottomText,
	bottomColor,
	setBottomColor,
}) => {
	const [topToggle, setTopToggle] = React.useState(false)
	const [bottomToggle, setBottomToggle] = React.useState(false)

	const handleClose = (top?: boolean) => top ? setTopToggle(false) : setBottomToggle(false)

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
				{topToggle ? (
					<div className="color-picker">
						<ColorPicker
							hideAlpha
							hideInput
							color={topColor}
							onChange={setTopColor}
						/>
						<button onClick={() => handleClose(true)} style={{ zIndex: 9999 }}>confirm</button>
					</div>
				) : (
					<div
						className="palette"
						style={{
							backgroundColor: topColor.hex,
							height: topToggle ? '20%' : '18px',
							width: topToggle ? '50%' : '18px',
						}}
						onClick={() => !topToggle ? setTopToggle(true) : null}
					/>
				)}
			</div>
			<div className="text-control">
				<input
					className="meme-text-control"
					type="text"
					name="bottomText"
					value={bottomText}
					onChange={onChange}
				/>
				{bottomToggle ? (
					<div className="color-picker">
						<ColorPicker
							hideAlpha
							hideInput
							color={bottomColor}
							onChange={setBottomColor}
						/>
						<button onClick={() => handleClose(false)} style={{ zIndex: 999 }}>confirm</button>
					</div>
				) : (
					<div
						className="palette"
						style={{
							backgroundColor: bottomColor.hex,
							height: bottomToggle ? '50%' : '18px',
							width: bottomToggle ? '50%' : '18px',
						}}
						onClick={() => setBottomToggle(!bottomToggle)}
					/>
				)}
			</div>
		</div>
	)
}

export default MemeTextControl


/**
 * import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("#561ecb");

  return <ColorPicker color={color} onChange={setColor} />;
}
 */