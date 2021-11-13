import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaToggleOff, FaToggleOn } from 'react-icons/fa';

const DynamicController = ({ sendData }) => {
	const [dynamic, setDynamic] = useState('off');
	const [direction, setDirection] = useState('right');

	const handleDynamic = () => {
		if (dynamic === 'off') {
			setDynamic('on');
			sendData('d', 1);
		} else {
			setDynamic('off');
			sendData('d', 0);
		}
	};

	const handleDirection = () => {
		if (direction === 'right') {
			setDirection('left');
			sendData('l', 1);
		} else {
			setDirection('right');
			sendData('l', 0);
		}
	};

	return (
		<div className="dynamic-controller controller-item">
			<div className="dynamic-label">Dynamic</div>
			<div className={dynamic === 'off' ? 'button gray' : 'button purple'} onClick={handleDynamic}>
				{dynamic === 'off' ? <FaToggleOff size={25} color="black" /> : <FaToggleOn size={25} color="white" />}
			</div>

			<div className={direction === 'left' ? 'button orange' : 'button pink'} onClick={handleDirection}>
				{direction === 'left' ? <FaArrowLeft size={25} color="white" /> : <FaArrowRight size={25} color="white" />}
			</div>
		</div>
	);
};

export default DynamicController;
