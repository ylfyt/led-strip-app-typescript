import { useState } from 'react';
import { FaBackward, FaForward } from 'react-icons/fa';

const PaletteController = ({ sendData, currentPal }) => {
	const palettes = currentPal.palettes;

	const [palette, setPalette] = useState(currentPal.palette);
	const [brightness, setBrightness] = useState(currentPal.brightness);
	const [paletteName, setPaletteName] = useState(palettes[palette]);

	const handlePalette = (val) => {
		let idx = palette + val;
		if (idx < 0) {
			idx = 0;
		} else if (idx > palettes.length - 1) {
			idx = palettes.length - 1;
		}
		setPalette(idx);
		setPaletteName(palettes[idx]);
		// sendData('p', idx);
		console.log(idx);
	};

	const handleBrightness = (val) => {
		setBrightness(val);
		// sendData('b', val);
		console.log(val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="label">Palette</div>
			<div className="palette-controller-container">
				<div
					className="button orange"
					onClick={() => {
						handlePalette(-1);
					}}
				>
					<FaBackward size={25} color="white" />
				</div>
				<div className="palette-name">{paletteName}</div>
				<div
					className="button pink"
					onClick={() => {
						handlePalette(1);
					}}
				>
					<FaForward size={25} color="white" />
				</div>
			</div>

			<div className="brightness-controller">
				<div className="sub-label">Brightness: {brightness}</div>
				<div className="slidecontainer">
					<input className="slider" type="range" min="0" max="100" step="10" defaultValue={brightness} onChange={(e) => handleBrightness(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default PaletteController;
