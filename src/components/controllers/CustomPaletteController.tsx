import { FunctionComponent, useState } from 'react';
import { hexToRgb } from '../../utility/utility';

interface CustomPaletteControllerProps {
	sendData: (key: string, val: string) => void;
	updateConsoleFeedback: (key: string, val: string, success: boolean) => void;
}

interface IPaletteIdx {
	idx: number;
	color: string;
}

const CustomPaletteController: FunctionComponent<CustomPaletteControllerProps> = ({ sendData, updateConsoleFeedback }) => {
	const [colors, setColors] = useState<IPaletteIdx[]>([
		{ idx: 0, color: '#0000ff' },
		{ idx: 255, color: '#ff0000' },
	]);

	const handleIdxChange = (i: number, val: number) => {
		const temp = [...colors];
		temp[i].idx = val;
		setColors(temp);
	};

	const handleColorChange = (i: number, val: string) => {
		const temp = [...colors];
		temp[i].color = val;
		setColors(temp);
	};

	const handleSend = async () => {
		let query = '';
		for (let i = 0; i < colors.length; i++) {
			const color = colors[i];
			const rgb = hexToRgb(color.color);
			if (rgb === null) {
				console.log('null', color.color);
				updateConsoleFeedback('c', color.color, false);
				return;
			}
			if (i !== colors.length - 1) {
				query += color.idx + ',' + rgb + ',';
			} else {
				query += color.idx + ',' + rgb;
			}
		}
		sendData('c', query);
	};

	return (
		<div className="controller-item">
			<div className="label">Dynamic Palette</div>
			<div className="controller-mecha">
				<div className="palette-input">
					{colors.map((color, i) => {
						return (
							<div key={i}>
								<input
									type="number"
									value={colors[i].idx}
									onChange={
										i > 0 && i < colors.length - 1
											? (e) => {
													handleIdxChange(i, parseInt(e.target.value));
											  }
											: (e) => {}
									}
								/>
								<input
									type="text"
									value={colors[i].color}
									onChange={(e) => {
										handleColorChange(i, e.target.value);
									}}
								/>
							</div>
						);
					})}
				</div>

				<button onClick={handleSend}>Send</button>
			</div>
		</div>
	);
};

export default CustomPaletteController;
