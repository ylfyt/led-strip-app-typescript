import DynamicController from './controllers/dynamicController';
import PaletteController from './controllers/paletteController';
import { FC, useState } from 'react';
import { API_PASSWORD } from '../constants/constant';
import { ControllerPorps } from '../constants/interfaces';
import CustomPaletteController from './controllers/CustomPaletteController';

const Controller: FC<ControllerPorps> = ({ currentState, baseURL }) => {
	const getFeedback = (key: string, val: string, success: boolean) => {
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
	const sendData = async (key: string, val: string) => {
		const auth = `pw=${API_PASSWORD}`;
		const data = `${key}=${val}`;
		const baseUrl = `${baseURL}/strip`;
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

	const updateFeedback = (key: string, val: string, success: boolean) => {
		if (key === 'c') {
			val = 'Custom';
		}
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
				<DynamicController sendData={sendData} dynamicState={currentState.dyn} />
				<PaletteController sendData={sendData} paletteState={currentState.pal} />
				<CustomPaletteController sendData={sendData} updateConsoleFeedback={updateFeedback} />
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
