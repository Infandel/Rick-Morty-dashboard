import { NavLink } from 'react-router-dom';
import { cn } from '@shared/lib/utils';
import { Table, BarChart3 } from 'lucide-react';

const navItems = [
	{ to: '/posts', label: 'Posts Table', icon: Table },
	{ to: '/characters', label: 'Character Charts', icon: BarChart3 },
];

export function Navigation() {
	return (
		<nav className='border-b border-border bg-card'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center gap-6 h-16'>
					<div className='flex items-center gap-2'>
						<div className='h-8 w-8 rounded-lg bg-primary flex items-center justify-center'>
							<span className='text-primary-foreground font-bold text-lg'>R</span>
						</div>
						<h3 className='font-semibold text-lg'>R&M'n'Charts</h3>
					</div>
					<div className='flex items-center gap-1 ml-8'>
						{navItems.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) =>
									cn(
										'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
										isActive
											? 'bg-primary text-primary-foreground'
											: 'text-muted-foreground hover:text-foreground hover:bg-accent'
									)
								}
							>
								<item.icon className='h-4 w-4' />
								{item.label}
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
