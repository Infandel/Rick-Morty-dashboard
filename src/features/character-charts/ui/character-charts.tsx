import { useAllCharacters } from '@entities/character';
import { Spinner } from '@shared/ui/spinner';
import { useCharacterStats } from '../model/use-character-stats';
import { StatusChart } from './status-chart';
import { LocationChart } from './location-chart';
import { SpeciesChart } from './species-chart';

export function CharacterCharts() {
	const { data: characters, isLoading } = useAllCharacters();

	const { statusStats, locationStats, speciesStats } = useCharacterStats(characters || []);

	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-96'>
				<Spinner size='lg' />
			</div>
		);
	}

	return (
		<div className='grid gap-6 md:grid-cols-2'>
			<div className='md:col-span-2'>
				<LocationChart data={locationStats} />
			</div>
			<StatusChart data={statusStats} />
			<SpeciesChart data={speciesStats} />
		</div>
	);
}
