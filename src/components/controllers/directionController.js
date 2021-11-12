import { useState } from 'react';

const DirectionController = () => {
	const [val, setVal] = useState('Right');
	const [res, setRes] = useState('Test');

	const sendDirection = async (val) => {
		const auth = 'pw=1234';
		const url = 'http://192.168.43.138/strip?' + auth + '&' + 'l=' + val;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setRes(result));
	};

	const handleDirection = (val) => {
		if (val === true) {
			setVal('Left');
			sendDirection(1);
		} else {
			setVal('Right');
			sendDirection(0);
		}
	};

	return (
		<div className="direction-controller controller-item">
			<div className="direction-label">Direction: {val}</div>
			<div className="checkbox">
				<input type="checkbox" onChange={(e) => handleDirection(e.target.checked)} />
			</div>
			<p>{res}</p>
		</div>
	);
};

export default DirectionController;
