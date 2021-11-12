import { useState } from 'react';

const SpeedContoller = () => {
	const [val, setVal] = useState(10);
	const [res, setRes] = useState('Test');

	const sendSpeed = async (val) => {
		const auth = 'pw=1234';
		const url = 'http://192.168.43.138/strip?' + auth + '&' + 's=' + val;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setRes(result));
	};

	const handleSpeed = (val) => {
		setVal(val);
		sendSpeed(val);
	};

	return (
		<div className="speed-controller controller-item">
			<div className="speed-label">Speed : {val}</div>
			<div className="slidecontainer">
				<input className="slider" defaultValue="10" type="range" min="1" max="30" step="1" onChange={(e) => handleSpeed(e.target.value)} />
			</div>
			<p>{res}</p>
		</div>
	);
};

export default SpeedContoller;
