import { useState } from 'react';

const BrightnessController = () => {
	const [val, setVal] = useState(50);
	const [res, setRes] = useState('Test');

	const sendBrightness = async (val) => {
		const auth = 'pw=1234';
		const url = 'http://192.168.43.138/strip?' + auth + '&' + 'b=' + val;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setRes(result));
	};

	const handleBrightness = (val) => {
		setVal(val);
		sendBrightness(val);
	};

	return (
		<div className="brightness-controller controller-item">
			<div className="brightness-label">Brightness: {val}</div>
			<div className="slidecontainer">
				<input className="slider" type="range" min="0" max="100" step="1" defaultValue="50" onChange={(e) => handleBrightness(e.target.value)} />
			</div>
			<p>{res}</p>
		</div>
	);
};

export default BrightnessController;
