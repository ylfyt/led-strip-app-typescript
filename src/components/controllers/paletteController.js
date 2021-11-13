import { useState } from 'react';
import { FaBackward, FaForward } from 'react-icons/fa';

const PaletteController = ({ sendData, currentPal }) => {
	const palettes = currentPal.palettes;

	const [palette, setPalette] = useState(currentPal.palette);
	const [brightness, setBrightness] = useState(currentPal.brightness);
	const [paletteName, setPaletteName] = useState(palettes[palette]);

	const handlePalette = (val) => {
		let idx = palette + val;
		setPalette(idx);
		setPaletteName(palettes[idx]);
		sendData('p', idx);
	};

	const handleBrightness = (val) => {
		setBrightness(val);
		sendData('b', val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="label">Palette</div>
			<div className="palette-controller-container">
				{palette !== 0 ? (
					<div className="button orange" onClick={() => handlePalette(-1)}>
						<FaBackward size={25} color="white" />
					</div>
				) : (
					<div className="button inactive">
						<FaBackward size={25} color="white" />
					</div>
				)}

				<div className="palette-name">{paletteName}</div>

				{palette !== palettes.length - 1 ? (
					<div className="button pink" onClick={() => handlePalette(1)}>
						<FaForward size={25} color="white" />
					</div>
				) : (
					<div className="button inactive">
						<FaForward size={25} color="white" />
					</div>
				)}
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
