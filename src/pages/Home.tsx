import Controller from '../components/Controller';
import { useState } from 'react';
import { useEffect } from 'react';
import { API_PASSWORD, BASE_URL } from '../constants/constant';
import { LedState } from '../constants/interfaces';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState<LedState | null>(null);
	const [message, setMessage] = useState('Loading...');

	useEffect(() => {
		const auth = `pw=${API_PASSWORD}`;
		const baseUrl = `${BASE_URL}/current`;
		const url = `${baseUrl}?${auth}`;
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setCurrent(result);
				setLoading(false);
			})
			.catch((err) => setMessage(err.message));
	}, []);

	return (
		<div className="home">
			<h1 className="home-title">Controller</h1>
			{loading ? <div>{message}</div> : current && <Controller currentState={current} />}
		</div>
	);
};

export default Home;
