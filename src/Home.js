import Controller from './components/Controller';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState(null);
	const [message, setMessage] = useState('Loading...');

	useEffect(() => {
		const auth = 'pw=1234';
		const baseUrl = 'http://192.168.43.138/current';
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
			<h1>Strip Apps</h1>
			{loading ? <div>{message}</div> : <Controller currentValue={current} />}
		</div>
	);
};

export default Home;
