import { CustomRequestInit } from '../constants/interfaces';
import hexRgb from 'hex-rgb';

export const fetchWithTimeout = async (resource: RequestInfo, options: CustomRequestInit | undefined = {}) => {
	const { timeout = 8000 } = options;

	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeout);
	const response = await fetch(resource, {
		...options,
		signal: controller.signal,
	});

	clearTimeout(id);
	return response;
};

export const hexToRgb = (hex: string) => {
	try {
		console.log('hex', hex);
		const result = hexRgb(hex);

		const str = `${result.red},${result.green},${result.blue}`;

		return str;
	} catch (error: unknown) {
		return null;
	}
};
