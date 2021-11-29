import { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { DynamicProps } from '../../interfaces';

const DynamicController: FC<DynamicProps> = (props) => {
	const [dynamic, setDynamic] = useState(props.dynamicState.dynamic);
	const [direction, setDirection] = useState(props.dynamicState.direction);
	const [speed, setSpeed] = useState(props.dynamicState.speed);

	const handleDynamic = () => {
		if (dynamic === 'off') {
			setDynamic('on');
			props.sendData('d', String(1));
		} else {
			setDynamic('off');
			props.sendData('d', String(0));
		}
	};

	const handleDirection = () => {
		if (direction === 'right') {
			setDirection('left');
			props.sendData('l', String(1));
		} else {
			setDirection('right');
			props.sendData('l', String(0));
		}
	};

	const handleSpeed = (val: string) => {
		setSpeed(parseInt(val));
		props.sendData('s', String(val));
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
					<input className="slider" defaultValue={props.dynamicState.speed} type="range" min="1" max="30" step="1" onChange={(e) => handleSpeed(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default DynamicController;
