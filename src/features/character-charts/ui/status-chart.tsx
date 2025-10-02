import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { StatusStats } from '@entities/character';

interface StatusChartProps {
	data: StatusStats[];
}

const COLORS = {
	Alive: 'var(--chart-4)',
	Dead: 'var(--chart-1)',
	unknown: 'var(--chart-3)',
};

export function StatusChart({ data }: StatusChartProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Character Status Distribution</CardTitle>
				<CardDescription>Breakdown of characters by their current status</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={300}>
					<PieChart>
						<Pie
							data={data}
							cx='50%'
							cy='50%'
							labelLine={false}
							label={({ status, percent }) => `${status}: ${(percent * 100).toFixed(0)}%`}
							outerRadius={100}
							fill='#8884d8'
							dataKey='count'
							nameKey='status'
						>
							{data.map((entry) => (
								<Cell key={`cell-${entry.status}`} fill={COLORS[entry.status as keyof typeof COLORS]} />
							))}
						</Pie>
						<Tooltip />
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
