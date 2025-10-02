'use client';

import { useMemo } from 'react';
import { usePosts, useUsers } from '@entities/post';
import { Spinner } from '@shared/ui/spinner';
import { usePostsTable } from '../model/use-posts-table';
import { TableFilters } from './table-filters';
import { VirtualizedTable } from './virtualized-table';
import { TablePagination } from './table-pagination';

export function PostsTable() {
	const { data: posts, isLoading: postsLoading } = usePosts();
	const { data: users, isLoading: usersLoading } = useUsers();

	const usersMap = useMemo(() => {
		if (!users) return new Map();
		return new Map(users.map((user) => [user.id, user.name]));
	}, [users]);

	const { table, globalFilter, setGlobalFilter } = usePostsTable(posts || [], usersMap);

	if (postsLoading || usersLoading) {
		return (
			<div className='flex items-center justify-center h-96'>
				<Spinner size='lg' />
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-4'>
			<TableFilters table={table} globalFilter={globalFilter} onGlobalFilterChange={setGlobalFilter} users={usersMap} />
			<VirtualizedTable table={table} />
			<TablePagination table={table} />
		</div>
	);
}
