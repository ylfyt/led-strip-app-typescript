import Controller from './components/Controller';
import { useState } from 'react';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState(null);
	const [message, setMessage] = useState('Loading...');

	if (loading) {
		console.log('Makan');
		const auth = 'pw=1234';
		const baseUrl = 'http://192.168.43.138/current';
		const url = `${baseUrl}?${auth}`;
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				console.log('lest gooo');
				setCurrent(result);
				setLoading(false);
			})
			.catch((err) => setMessage(err.message));
	}

	return (
		<div className="home">
			<h2>Home Page</h2>
			{loading ? <div>{message}</div> : <Controller currentValue={current} />}
		</div>
	);
};

export default Home;
