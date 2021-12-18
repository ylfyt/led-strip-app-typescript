import { useEffect, useState } from 'react';
import { DEFAULT_IP } from './constants/constant';
import { IPAddress } from './constants/interfaces';
import Home from './pages/Home';

function App() {
	const [localIp, setLocalIp] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const ip = localStorage.getItem('node_ip');
		if (ip === null) {
			setLocalIp(DEFAULT_IP);
			setLoading(false);
		} else {
			setLocalIp(ip);
			setLoading(false);
		}
	}, []);

	return (
		<div className="App">
			<div className="content">{!loading && <Home localIp={localIp} />}</div>
		</div>
	);
}

export default App;
