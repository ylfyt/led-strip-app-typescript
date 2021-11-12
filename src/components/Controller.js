import BrightnessController from './controllers/brightnessController';
import DynamicController from './controllers/dynamicController';
import SpeedContoller from './controllers/speedContoller';
import DirectionController from './controllers/directionController';
import PaletteController from './controllers/paletteController';

const Controller = () => {
	return (
		<div className="controller">
			<BrightnessController />
			<SpeedContoller />
			<DynamicController />
			<DirectionController />
			<PaletteController />
		</div>
	);
};

export default Controller;
