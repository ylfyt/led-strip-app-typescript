import BrightnessController from './controllers/brightnessController';
import DynamicController from './controllers/dynamicController';
import SpeedContoller from './controllers/speedContoller';
import PaletteController from './controllers/paletteController';
import { useState } from 'react/cjs/react.development';

const Controller = () => {
	const [feedback, setFeedback] = useState('Ready');

	const sendData = async (key, val) => {
		const auth = 'pw=1234';
		const data = `${key}=${val}`;
		const baseUrl = `http://192.168.43.138/strip`;
		const url = `${baseUrl}?${auth}&${data}`;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setFeedback(result));
	};

	return (
		<div className="controller">
			<div className="controller-container">
				<DynamicController sendData={sendData} />
				<SpeedContoller sendData={sendData} />
				<PaletteController sendData={sendData} />
				<BrightnessController sendData={sendData} />
			</div>
			<div className="feedback">{feedback}</div>
		</div>
	);
};

export default Controller;
