import { useState } from 'react';

const SpeedContoller = ({ sendData }) => {
	const [val, setVal] = useState(10);

	const handleSpeed = (val) => {
		setVal(val);
		sendData('s', val);
	};

	return (
		<div className="speed-controller controller-item">
			<div className="speed-label">Speed : {val}</div>
			<div className="slidecontainer">
				<input className="slider" defaultValue="10" type="range" min="1" max="30" step="1" onChange={(e) => handleSpeed(e.target.value)} />
			</div>
		</div>
	);
};

export default SpeedContoller;
