import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface SpeciesChartProps {
	data: Array<{ species: string; count: number }>;
}

export function SpeciesChart({ data }: SpeciesChartProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Top Species Distribution</CardTitle>
				<CardDescription>Most common species in the Rick and Morty universe</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width='100%' height={350}>
					<BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='species' angle={-45} textAnchor='end' height={100} style={{ fontSize: '12px' }} />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='count' fill='var(--chart-2)' radius={[4, 4, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
