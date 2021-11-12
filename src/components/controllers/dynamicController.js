import { useState } from 'react';

const DynamicController = () => {
	const [val, setVal] = useState('Off');
	const [res, setRes] = useState('Test');

	const sendDynamic = async (val) => {
		const auth = 'pw=1234';
		const url = 'http://192.168.43.138/strip?' + auth + '&' + 'd=' + val;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setRes(result));
	};

	const handleDynamic = (val) => {
		if (val === true) {
			setVal('On');
			sendDynamic(1);
		} else {
			setVal('Off');
			sendDynamic(0);
		}
	};

	return (
		<div className="dynamic-controller controller-item">
			<div className="dynamic-label">Dynamic: {val}</div>
			<div className="checkbox">
				<input type="checkbox" onChange={(e) => handleDynamic(e.target.checked)} />
			</div>
			<p>{res}</p>
		</div>
	);
};

export default DynamicController;
