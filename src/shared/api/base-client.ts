export class ApiError extends Error {
	constructor(message: string, public status: number, public data?: unknown) {
		super(message);
		this.name = 'ApiError';
	}
}

export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
	const response = await fetch(url, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options?.headers,
		},
	});

	if (!response.ok) {
		throw new ApiError(`HTTP error! status: ${response.status}`, response.status, await response.json());
	}

	return response.json();
}
