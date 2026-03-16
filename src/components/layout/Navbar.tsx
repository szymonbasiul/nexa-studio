import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

const navLinks = [
	{ label: 'Services', href: '#services' },
	{ label: 'Work', href: '#work' },
	{ label: 'Process', href: '#process' },
	{ label: 'About', href: '#about' },
];

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-[#D9D1C7] bg-[#F6F1E8]/90 backdrop-blur-xl">
			<Container>
				<div className="flex min-h-20 items-center justify-between gap-4 py-4">
					<a
						href="#hero"
						className="shrink-0 text-base font-semibold tracking-tight text-[#181716] transition-opacity hover:opacity-80 sm:text-lg"
					>
						Nexa Studio
					</a>

					<nav className="hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="relative text-sm font-medium text-[#6B645C] transition-colors hover:text-[#181716] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#181716] after:transition-all after:duration-300 hover:after:w-full"
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="shrink-0">
						<Button href="#cta">Start a Project</Button>
					</div>
				</div>
			</Container>
		</header>
	);
}