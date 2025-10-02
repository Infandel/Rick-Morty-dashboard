import { useMemo, useState } from 'react';
import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	type ColumnDef,
	type SortingState,
	type ColumnFiltersState,
} from '@tanstack/react-table';
import type { Post } from '@entities/post';

export function usePostsTable(posts: Post[], users: Map<number, string>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter] = useState('');

	const columns = useMemo<ColumnDef<Post>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
				size: 80,
				cell: (info) => <div className='text-center font-medium'>{info.getValue() as number}</div>,
			},
			{
				accessorKey: 'userId',
				header: 'User',
				size: 150,
				cell: (info) => {
					const userId = info.getValue() as number;
					return <div className='font-medium'>{users.get(userId) || `User ${userId}`}</div>;
				},
				filterFn: (row, id, value) => {
					const userId = row.getValue(id) as number;
					const userName = users.get(userId) || '';
					return userName.toLowerCase().includes(value.toLowerCase());
				},
			},
			{
				accessorKey: 'title',
				header: 'Title',
				// size: 300,
				cell: (info) => <div className='font-medium text-foreground line-clamp-3'>{info.getValue() as string}</div>,
			},
			{
				accessorKey: 'body',
				header: 'Post',
				size: 800,
				minSize: 300,
				cell: (info) => <div className='text-md line-clamp-3'>{info.getValue() as string}</div>,
			},
		],
		[users]
	);

	const table = useReactTable({
		data: posts,
		columns,
		state: {
			sorting,
			columnFilters,
			globalFilter,
		},
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 40,
			},
		},
	});

	return {
		table,
		globalFilter,
		setGlobalFilter,
	};
}
