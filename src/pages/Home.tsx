import Controller from '../components/Controller';
import { FC, useState } from 'react';
import { useEffect } from 'react';
import { API_PASSWORD, GAPI_URL } from '../constants/constant';
import { LedState } from '../constants/interfaces';
import { fetchWithTimeout } from '../utility/utility';

interface HomeProps {
	localIp: string;
}

const Home: FC<HomeProps> = ({ localIp }) => {
	const [current, setCurrent] = useState<LedState | null>(null);
	const [messages, setMessages] = useState(['Loading...']);
	const [ipAddress, setIpAddess] = useState(localIp);
	const [validIp, setValidIp] = useState(true);
	const [baseURL, setBaseURL] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const auth = `pw=${API_PASSWORD}`;
		const baseUrl = `http://${ipAddress}/current`;
		const url = `${baseUrl}?${auth}`;

		if (validIp) {
			fetchWithTimeout(url, { timeout: 2000 })
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					localStorage.setItem('node_ip', ipAddress);
					setCurrent(result);
					setBaseURL(`http://${ipAddress}`);
					setLoading(false);
				})
				.catch((err) => {
					let temp = [...messages];
					temp.push('Failed to fetch current state!!');
					temp.push('Looking for new IP');
					setMessages(temp);
					setValidIp(false);
				});
		} else {
			fetchWithTimeout(GAPI_URL)
				.then((response) => {
					return response.json();
				})
				.then((result) => {
					localStorage.setItem('node_ip', result.ip);
					let temp = [...messages];
					temp.push('Get new IP');
					temp.push('Load current state');
					setMessages(temp);
					setIpAddess(result.ip);
					setValidIp(true);
				})
				.catch((err) => {
					let temp = [...messages, 'Failed to get new IP'];
					setMessages(temp);
				});
		}
	}, [validIp]);

	return (
		<div className="home">
			<h1 className="home-title">Controller</h1>
			{loading && (
				<div className="message-container">
					{messages.map((message, idx) => {
						return idx === 0 ? (
							<p key={idx}>{message}</p>
						) : (
							<p key={idx}>
								{idx}. {message}
							</p>
						);
					})}
				</div>
			)}

			{current && <Controller currentState={current} baseURL={baseURL} />}
		</div>
	);
};

export default Home;
