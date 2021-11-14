import DynamicController from './controllers/dynamicController';
import PaletteController from './controllers/paletteController';
import { useState } from 'react';

const Controller = ({ currentValue }) => {
	const getFeedback = (key, val, success) => {
		const now = new Date();
		const h = now.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
		const m = now.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
		const s = now.getSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
		const ms = now.getMilliseconds().toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
		const time = h + ':' + m + ':' + s + ':' + ms;
		let msg = '';
		if (key === '' && val === '') {
			msg = `${time} Ready to send data`;
		} else {
			if (success) {
				msg = `${time} Success send ${key}: ${val}`;
			} else {
				msg = `${time} Failed send ${key}: ${val}`;
			}
		}

		const feedback = {
			success,
			msg,
		};

		return feedback;
	};
	const firstFeedback = getFeedback('', '', true);
	const [feedbacks, setFeedbacks] = useState([firstFeedback]);
	const sendData = async (key, val) => {
		const auth = 'pw=1234';
		const data = `${key}=${val}`;
		const baseUrl = `http://192.168.43.138/strip`;
		const url = `${baseUrl}?${auth}&${data}`;
		fetch(url)
			.then((response) => {
				if (response.ok) {
					updateFeedback(key, val, true);
				} else {
					updateFeedback(key, val, false);
				}
			})
			.catch((err) => updateFeedback(key, val, false));
	};

	const updateFeedback = (key, val, success) => {
		const feedback = getFeedback(key, val, success);
		const temp = [feedback, ...feedbacks];
		if (temp.length > 5) {
			temp.splice(5, 1);
		}
		setFeedbacks(temp);
	};

	return (
		<div className="controller">
			<div className="controller-container">
				<DynamicController sendData={sendData} currentDyn={currentValue.dyn} />
				<PaletteController sendData={sendData} currentPal={currentValue.pal} />
				<div className="console feedback-container controller-item">
					{feedbacks.map((feedback, idx) => (
						<div key={idx} className={feedback.success ? 'feedback-item success' : 'feedback-item failed'}>
							{feedback.msg}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Controller;
