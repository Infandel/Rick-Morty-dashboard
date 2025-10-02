import { useMemo } from 'react';
import type { Character, LocationStats, StatusStats } from '@entities/character';

export function useCharacterStats(characters: Character[]) {
	const locationStats = useMemo<LocationStats[]>(() => {
		const locationMap = new Map<string, number>();

		characters.forEach((character) => {
			const location = character.location.name;
			locationMap.set(location, (locationMap.get(location) || 0) + 1);
		});

		return Array.from(locationMap.entries())
			.map(([location, count]) => ({ location, count }))
			.sort((a, b) => b.count - a.count)
			.slice(0, 10);
	}, [characters]);

	const statusStats = useMemo<StatusStats[]>(() => {
		const statusMap = new Map<string, number>();

		characters.forEach((character) => {
			const status = character.status;
			statusMap.set(status, (statusMap.get(status) || 0) + 1);
		});

		return Array.from(statusMap.entries()).map(([status, count]) => ({ status, count }));
	}, [characters]);

	const speciesStats = useMemo(() => {
		const speciesMap = new Map<string, number>();

		characters.forEach((character) => {
			const species = character.species;
			speciesMap.set(species, (speciesMap.get(species) || 0) + 1);
		});

		return Array.from(speciesMap.entries())
			.map(([species, count]) => ({ species, count }))
			.sort((a, b) => b.count - a.count)
			.slice(0, 8);
	}, [characters]);

	return {
		locationStats,
		statusStats,
		speciesStats,
	};
}
