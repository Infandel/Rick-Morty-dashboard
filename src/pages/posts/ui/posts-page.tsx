import { PostsTable } from '@features/posts-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';

export function PostsPage() {
	return (
		<div className='flex flex-col gap-6'>
			<div>
				<h1 className='text-3xl font-bold tracking-tight text-balance'>Posts Management</h1>
				<p className='text-muted-foreground mt-2 text-pretty'>
					Browse and filter posts from JSONPlaceholder API with advanced table features
				</p>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>All Posts</CardTitle>
					<CardDescription>
						Sortable, filterable, and paginated table with virtualization for optimal performance
					</CardDescription>
				</CardHeader>
				<CardContent>
					<PostsTable />
				</CardContent>
			</Card>
		</div>
	);
}
