import { useState } from 'react';
import { FaBackward, FaForward } from 'react-icons/fa';

const PaletteController = ({ sendData }) => {
	const [val, setVal] = useState(2);

	const handlePalette = (val) => {
		setVal(val);
		sendData('p', val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="palette-label">Palette: {val}</div>
			{/* <div className="slidecontainer">
				<input className="slider" defaultValue="2" type="range" min="0" max="7" step="1" onChange={(e) => handlePalette(e.target.value)} />
			</div> */}
			<div className="palette-controller-container">
				<div className="button orange">
					<FaBackward size={25} color="white" />
				</div>
				<div className="palette-name">real-sunset</div>
				<div className="button pink">
					<FaForward size={25} color="white" />
				</div>
			</div>
		</div>
	);
};

export default PaletteController;
