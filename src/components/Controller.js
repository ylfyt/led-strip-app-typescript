import DynamicController from './controllers/dynamicController';
import PaletteController from './controllers/paletteController';
import { useState } from 'react';

const Controller = ({ currentValue }) => {
	const [feedback, setFeedback] = useState('Ready');

	const sendData = async (key, val) => {
		const auth = 'pw=1234';
		const data = `${key}=${val}`;
		const baseUrl = `http://192.168.43.138/strip`;
		const url = `${baseUrl}?${auth}&${data}`;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setFeedback(result))
			.catch((err) => setFeedback(err.message));
	};

	return (
		<div className="controller">
			<div className="controller-container">
				<DynamicController sendData={sendData} currentDyn={currentValue.dyn} />
				<PaletteController sendData={sendData} currentPal={currentValue.pal} />
			</div>
			<div className="feedback">{feedback}</div>
		</div>
	);
};

export default Controller;
