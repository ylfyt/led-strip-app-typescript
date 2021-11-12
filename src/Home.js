import Controller from './components/Controller';
import { useState } from 'react';

const Home = () => {
	const [name, setName] = useState('Yudi');

	const handleClick = () => {
		setName('Hello');
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<Controller />
		</div>
	);
};

export default Home;
