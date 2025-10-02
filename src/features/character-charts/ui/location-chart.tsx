import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { LocationStats } from '@entities/character';

interface LocationChartProps {
	data: LocationStats[];
}

const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];

export function LocationChart({ data }: LocationChartProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Top 10 Character Locations</CardTitle>
				<CardDescription>Most populated locations in the Rick and Morty universe</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={400}>
					<BarChart data={data} layout='vertical' margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis type='number' />
						<YAxis dataKey='location' type='category' width={110} style={{ fontSize: '12px' }} />
						<Tooltip />
						<Bar dataKey='count' radius={[0, 4, 4, 0]}>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
