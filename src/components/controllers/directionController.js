import { useState } from 'react';

const DirectionController = ({ sendData }) => {
	const [val, setVal] = useState('Right');

	const handleDirection = (val) => {
		if (val === true) {
			setVal('Left');
			sendData('l', 1);
		} else {
			setVal('Right');
			sendData('l', 0);
		}
	};

	return (
		<div className="direction-controller controller-item">
			<div className="direction-label">Direction: {val}</div>
			<div className="checkbox">
				<input type="checkbox" onChange={(e) => handleDirection(e.target.checked)} />
			</div>
		</div>
	);
};

export default DirectionController;
