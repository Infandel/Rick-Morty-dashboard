import { CSSProperties } from 'react';
import { flexRender } from '@tanstack/react-table';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import type { Table } from '@tanstack/react-table';
import type { Post } from '@entities/post';
import { cn } from '@shared/lib/utils';

interface VirtualizedTableProps {
	table: Table<Post>;
}

export function VirtualizedTable({ table }: VirtualizedTableProps) {
	const { rows } = table.getRowModel();

	const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
		const row = rows[index];
		return (
			<div
				style={style}
				className={cn('flex items-center border-b border-border ', index % 2 === 0 ? 'bg-background' : 'bg-muted/30')}
			>
				{row.getVisibleCells().map((cell) => (
					<div
						key={cell.id}
						className='flex items-center px-4 py-3 overflow-hidden'
						style={{ width: cell.column.getSize() }}
					>
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</div>
				))}
			</div>
		);
	};

	return (
		<div className='rounded-md border border-border bg-card'>
			<div className='flex items-center border-b border-border bg-muted/50 '>
				{table.getHeaderGroups().map((headerGroup) =>
					headerGroup.headers.map((header) => (
						<div
							key={header.id}
							className='flex items-center px-4 py-3 font-medium text-sm last:mr-5'
							style={{ width: header.getSize() }}
						>
							{header.isPlaceholder ? null : (
								<button
									className={cn(
										'flex items-center gap-2 hover:text-foreground transition-colors',
										header.column.getCanSort() ? 'cursor-pointer select-none' : ''
									)}
									onClick={header.column.getToggleSortingHandler()}
								>
									{flexRender(header.column.columnDef.header, header.getContext())}
									{header.column.getCanSort() && (
										<span className='text-muted-foreground'>
											{header.column.getIsSorted() === 'asc' ? (
												<ArrowUp className='h-4 w-4' />
											) : header.column.getIsSorted() === 'desc' ? (
												<ArrowDown className='h-4 w-4' />
											) : (
												<ArrowUpDown className='h-4 w-4' />
											)}
										</span>
									)}
								</button>
							)}
						</div>
					))
				)}
			</div>
			<div className='h-[600px]'>
				<AutoSizer>
					{({ height, width }) => (
						<List height={height} itemCount={rows.length} itemSize={100} width={width}>
							{Row}
						</List>
					)}
				</AutoSizer>
			</div>
		</div>
	);
}
