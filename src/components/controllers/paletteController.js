import { useState } from 'react';
import { FaBackward, FaForward } from 'react-icons/fa';

const PaletteController = ({ sendData }) => {
	const [palette, setPalette] = useState(2);
	const [brightness, setBrightness] = useState(50);

	const handlePalette = () => {
		setPalette(palette);
		sendData('p', palette);
	};

	const handleBrightness = (val) => {
		setBrightness(val);
		sendData('b', val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="label">Palette: {palette}</div>
			<div className="palette-controller-container">
				<div className="button orange">
					<FaBackward size={25} color="white" />
				</div>
				<div className="palette-name">real-sunset</div>
				<div className="button pink">
					<FaForward size={25} color="white" />
				</div>
			</div>

			<div className="brightness-controller">
				<div className="brightness-label">Brightness: {brightness}</div>
				<div className="slidecontainer">
					<input className="slider" type="range" min="0" max="100" step="1" defaultValue="50" onChange={(e) => handleBrightness(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default PaletteController;
