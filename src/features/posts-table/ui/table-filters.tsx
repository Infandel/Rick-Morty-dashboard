import { Input } from '@shared/ui/input';
import { Select } from '@shared/ui/select';
import type { Table } from '@tanstack/react-table';
import type { Post } from '@entities/post';

interface TableFiltersProps {
	table: Table<Post>;
	globalFilter: string;
	onGlobalFilterChange: (value: string) => void;
	users: Map<number, string>;
}

export function TableFilters({ table, globalFilter, onGlobalFilterChange, users }: TableFiltersProps) {
	const userFilter = (table.getColumn('userId')?.getFilterValue() as string) ?? '';

	return (
		<div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
			<div className='flex-1'>
				<Input
					placeholder='Search all posts...'
					value={globalFilter}
					onChange={(e) => onGlobalFilterChange(e.target.value)}
					className='max-w-sm'
				/>
			</div>
			<div className='w-full sm:w-48'>
				<Select value={userFilter} onChange={(e) => table.getColumn('userId')?.setFilterValue(e.target.value)}>
					<option value=''>All Users</option>
					{Array.from(users.entries()).map(([id, name]) => (
						<option key={id} value={name}>
							{name}
						</option>
					))}
				</Select>
			</div>
		</div>
	);
}
