import { useState } from 'react';

const PaletteController = ({ sendData }) => {
	const [val, setVal] = useState(2);

	const handlePalette = (val) => {
		setVal(val);
		sendData('p', val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="palette-label">Palette: {val}</div>
			<div className="slidecontainer">
				<input className="slider" defaultValue="2" type="range" min="0" max="7" step="1" onChange={(e) => handlePalette(e.target.value)} />
			</div>
		</div>
	);
};

export default PaletteController;
