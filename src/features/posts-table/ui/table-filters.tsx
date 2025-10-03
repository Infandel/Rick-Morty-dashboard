import { Input } from '@shared/ui/input';
import type { Table } from '@tanstack/react-table';
import type { Post } from '@entities/post';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

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
				<Select onValueChange={(e) => table.getColumn('userId')?.setFilterValue(e)} defaultValue={userFilter}>
					<SelectTrigger>
						<SelectValue placeholder='Select user' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={' '}>All Users</SelectItem>
						{Array.from(users.entries()).map(([id, name]) => (
							<SelectItem key={id} value={name} className='capitalize'>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
