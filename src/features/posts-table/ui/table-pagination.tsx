import { Button } from '@shared/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import type { Table } from '@tanstack/react-table';
import type { Post } from '@entities/post';

interface TablePaginationProps {
	table: Table<Post>;
}

export function TablePagination({ table }: TablePaginationProps) {
	return (
		<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
			<div className='text-sm text-muted-foreground'>
				Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
				{Math.min(
					(table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
					table.getFilteredRowModel().rows.length
				)}{' '}
				of {table.getFilteredRowModel().rows.length} results
			</div>
			<div className='flex items-center gap-2'>
				<Button
					variant='outline'
					size='icon'
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}
				>
					<ChevronsLeft className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='icon'
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					<ChevronLeft className='h-4 w-4' />
				</Button>
				<div className='flex items-center gap-1 text-sm'>
					<span className='font-medium'>{table.getState().pagination.pageIndex + 1}</span>
					<span className='text-muted-foreground'>of</span>
					<span className='font-medium'>{table.getPageCount()}</span>
				</div>
				<Button variant='outline' size='icon' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					<ChevronRight className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='icon'
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}
				>
					<ChevronsRight className='h-4 w-4' />
				</Button>
			</div>
		</div>
	);
}
