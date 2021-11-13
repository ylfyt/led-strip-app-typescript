import { useState } from 'react';

const DynamicController = ({ sendData }) => {
	const [val, setVal] = useState('Off');

	const handleDynamic = (val) => {
		if (val === true) {
			setVal('On');
			sendData('d', 1);
		} else {
			setVal('Off');
			sendData('d', 0);
		}
	};

	return (
		<div className="dynamic-controller controller-item">
			<div className="dynamic-label">Dynamic: {val}</div>
			<div className="checkbox">
				<input type="checkbox" onChange={(e) => handleDynamic(e.target.checked)} />
			</div>
		</div>
	);
};

export default DynamicController;
