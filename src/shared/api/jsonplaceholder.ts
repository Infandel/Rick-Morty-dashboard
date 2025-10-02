import { fetchApi } from './base-client';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const jsonPlaceholderApi = {
	get: (endpoint: string) => fetchApi(`${BASE_URL}${endpoint}`),
};
