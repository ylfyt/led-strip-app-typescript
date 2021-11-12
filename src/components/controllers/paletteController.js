import { useState } from 'react';

const PaletteController = () => {
	const [val, setVal] = useState(2);
	const [res, setRes] = useState('Test');

	const sendPalette = async (val) => {
		const auth = 'pw=1234';
		const url = 'http://192.168.43.138/strip?' + auth + '&' + 'p=' + val;
		fetch(url)
			.then((response) => response.text())
			.then((result) => setRes(result));
	};

	const handlePalette = (val) => {
		setVal(val);
		sendPalette(val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="palette-label">Palette: {val}</div>
			<div className="slidecontainer">
				<input className="slider" defaultValue="2" type="range" min="0" max="7" step="1" onChange={(e) => handlePalette(e.target.value)} />
			</div>
			<p>{res}</p>
		</div>
	);
};

export default PaletteController;
