import Link from 'next/link';

type ButtonProps = {
	href: string;
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
};

export default function Button({
	href,
	children,
	variant = 'primary',
}: ButtonProps) {
	const baseClassName =
		'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium no-underline transition-all duration-200 hover:shadow-md sm:px-6';

	if (variant === 'primary') {
		return (
			<Link
				href={href}
				className={`${baseClassName} bg-[#181716] hover:bg-[#2A2825] hover:-translate-y-0.5`}
				style={{ color: '#FFFDF8' }}
			>
				{children}
			</Link>
		);
	}

	return (
		<Link
			href={href}
			className={`${baseClassName} border border-[#D9D1C7] bg-[#FFFDF8] hover:bg-[#F3E9DE]`}
			style={{ color: '#181716' }}
		>
			{children}
		</Link>
	);
}