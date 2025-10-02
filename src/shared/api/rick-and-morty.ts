import { fetchApi } from './base-client';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const rickAndMortyApi = {
	get: (endpoint: string) => fetchApi(`${BASE_URL}${endpoint}`),
};
