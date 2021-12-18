import { IPAddress } from './constants/interfaces';
import Home from './pages/Home';

function App() {
	const localIp: IPAddress = localStorage.getItem('node_ip');

	return (
		<div className="App">
			<div className="content">
				<Home localIp={localIp} />
			</div>
		</div>
	);
}

export default App;
