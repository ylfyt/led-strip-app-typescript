import { FunctionComponent, useState } from 'react';
import { hexToRgb } from '../../utility/utility';

interface CustomPaletteControllerProps {}

interface IPaletteIdx {
	idx: number;
	color: string;
}

const CustomPaletteController: FunctionComponent<CustomPaletteControllerProps> = () => {
	const [colors, setColors] = useState<IPaletteIdx[]>([
		{ idx: 0, color: '#0000ff' },
		{ idx: 255, color: '#ff0000' },
	]);

	const handleSend = async () => {
		// setColors([...colors, { idx: 20, color: '#ffffff' }]);
		console.log(hexToRgb(colors[0].color));
	};

	return (
		<div className="controller-item">
			<div className="label">Dynamic Palette</div>
			<div className="controller-mecha">
				<div className="palette-input">
					{colors.map((color, i) => {
						return (
							<div key={i}>
								<input type="text" value={colors[i].idx} />
								<input type="text" value={colors[i].color} />
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
