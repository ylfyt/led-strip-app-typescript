import { CustomRequestInit } from '../constants/interfaces';

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
