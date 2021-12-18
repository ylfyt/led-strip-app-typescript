export interface DynamicState {
	dynamic: 'on' | 'off';
	speed: number;
	direction: 'right' | 'left';
}

export interface PalettesState {
	palettes: string[];
	palette: number;
	brightness: number;
}

export interface DynamicProps {
	sendData: (key: string, val: string) => void;
	dynamicState: DynamicState;
}

export interface PaletteProps {
	sendData: (key: string, val: string) => void;
	paletteState: PalettesState;
}

export interface LedState {
	dyn: DynamicState;
	pal: PalettesState;
}

export interface ControllerPorps {
	currentState: LedState;
	baseURL: string;
}
export interface CustomRequestInit extends RequestInit {
	timeout?: number;
}

export type IPAddress = string | null;
