import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaToggleOff, FaToggleOn } from 'react-icons/fa';

const DynamicController = ({ sendData, currentDyn }) => {
	const [dynamic, setDynamic] = useState(currentDyn.dynamic);
	const [direction, setDirection] = useState(currentDyn.direction);
	const [speed, setSpeed] = useState(currentDyn.speed);

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

	const handleSpeed = (val) => {
		setSpeed(val);
		sendData('s', val);
	};

	return (
		<div className="dynamic-controller controller-item">
			<div className="label">Dynamic</div>

			<div className="button-container">
				<button className={direction === 'left' ? 'button orange' : 'button pink'} onClick={handleDirection}>
					{direction === 'left' ? <FaArrowLeft size={25} color="white" /> : <FaArrowRight size={25} color="white" />}
				</button>
				<button className={dynamic === 'off' ? 'button' : 'button purple'} onClick={handleDynamic}>
					{dynamic === 'off' ? <FaToggleOff size={25} color="black" /> : <FaToggleOn size={25} color="white" />}
				</button>
			</div>

			<div className="speed-controller">
				<div className="sub-label">Speed : {speed}</div>
				<div className="slidecontainer">
					<input className="slider" defaultValue={currentDyn.speed} type="range" min="1" max="30" step="1" onChange={(e) => handleSpeed(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default DynamicController;
