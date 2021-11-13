import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const DirectionController = ({ sendData }) => {
	const [val, setVal] = useState('right');

	const handleDirection = () => {
		if (val === 'right') {
			setVal('left');
			sendData('l', 1);
		} else {
			setVal('right');
			sendData('l', 0);
		}
	};

	return (
		<div className="direction-controller controller-item">
			<div className="direction-label">Direction: {val}</div>
			<div className={val === 'left' ? 'button orange' : 'button pink'} onClick={handleDirection}>
				{val === 'left' ? <FaArrowLeft size={25} color="white" /> : <FaArrowRight size={25} color="white" />}
			</div>
		</div>
	);
};

export default DirectionController;
