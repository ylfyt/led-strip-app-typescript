import { useState } from 'react';

const BrightnessController = ({ sendData }) => {
	const [val, setVal] = useState(50);

	const handleBrightness = (val) => {
		setVal(val);
		sendData('b', val);
	};

	return (
		<div className="brightness-controller controller-item">
			<div className="brightness-label">Brightness: {val}</div>
			<div className="slidecontainer">
				<input className="slider" type="range" min="0" max="100" step="1" defaultValue="50" onChange={(e) => handleBrightness(e.target.value)} />
			</div>
		</div>
	);
};

export default BrightnessController;
