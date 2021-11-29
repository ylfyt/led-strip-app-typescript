import { FC, useState } from 'react';
import { FaBackward, FaForward } from 'react-icons/fa';
import { PaletteProps } from '../../constants/interfaces';

const PaletteController: FC<PaletteProps> = (props) => {
	const palettes = props.paletteState.palettes;

	const [palette, setPalette] = useState(props.paletteState.palette);
	const [brightness, setBrightness] = useState(props.paletteState.brightness);
	const [paletteName, setPaletteName] = useState(palettes[palette]);

	const handlePalette = (val: number) => {
		let idx = palette + val;
		setPalette(idx);
		setPaletteName(palettes[idx]);
		props.sendData('p', String(idx));
	};

	const handleBrightness = (val: string) => {
		setBrightness(parseInt(val));
		props.sendData('b', val);
	};

	return (
		<div className="palette-controller controller-item">
			<div className="label">Palette</div>
			<div className="palette-controller-container ">
				{palette !== 0 ? (
					<button className="button orange" onClick={() => handlePalette(-1)}>
						<FaBackward size={25} color="white" />
					</button>
				) : (
					<button className="button inactive">
						<FaBackward size={25} color="white" />
					</button>
				)}

				<div className="palette-name">{paletteName}</div>

				{palette !== palettes.length - 1 ? (
					<button className="button pink" onClick={() => handlePalette(1)}>
						<FaForward size={25} color="white" />
					</button>
				) : (
					<button className="button inactive">
						<FaForward size={25} color="white" />
					</button>
				)}
			</div>

			<div className="brightness-controller">
				<div className="sub-label">Brightness: {brightness}</div>
				<div className="slidecontainer">
					<input className="slider" type="range" min="0" max="100" step="10" defaultValue={brightness} onChange={(e) => handleBrightness(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default PaletteController;
