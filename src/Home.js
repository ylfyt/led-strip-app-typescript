import Controller from './components/Controller';
import { useState } from 'react';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState(null);
	const [message, setMessage] = useState('Loading...');
	const temp = {
		dyn: {
			dynamic: 'on',
			direction: 'left',
			speed: 7,
		},
		pal: {
			palette: 0,
			palettes: ['yy', 'makan', 'mionum', 'sunset'],
			brightness: 30,
		},
	};
	const auth = 'pw=1234';
	const baseUrl = 'http://192.168.43.138';
	const url = `${baseUrl}?${auth}`;
	setTimeout(() => {
		setCurrent(temp);
		setLoading(false);
	}, 2000);
	// fetch(url)
	// 	.then((response) => response.json())
	// 	.then((result) => {
	// 		setCurrent(result);
	// 		setLoading(false);
	// 	})
	// 	.catch((err) => setMessage(err.message));

	return (
		<div className="home">
			<h2>Home Page</h2>
			{loading ? <div>{message}</div> : <Controller currentValue={current} />}
		</div>
	);
};

export default Home;
