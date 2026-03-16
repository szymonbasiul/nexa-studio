import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

const featuredProjects = [
	{
		eyebrow: 'Featured Project',
		title: 'Atlas Atelier',
		category: 'Brand Website / Creative Studio',
		description:
			'A refined editorial website for a contemporary creative studio, focused on visual rhythm, spacious layout, and a clean presentation of services and selected work.',
		background: 'bg-[#EADBC9]',
		accent: 'bg-[#355E57]',
		accentText: 'text-[#FFFDF8]',
		tags: ['Editorial Layout', 'Creative Direction', 'Responsive Frontend'],
	},
	{
		eyebrow: 'Case Study',
		title: 'Northline Ventures',
		category: 'Venture Studio / Startup Presence',
		description:
			'A structured, modern website concept designed to communicate credibility, sharper positioning, and a stronger visual presence for a venture-focused brand.',
		background: 'bg-[#F1E7DA]',
		accent: 'bg-[#B85F43]',
		accentText: 'text-[#FFFDF8]',
		tags: ['Modern Grid', 'Typography System', 'Clean UI Build'],
	},
];

const supportingProjects = [
	{
		title: 'Luma Residence',
		meta: 'Interior / Premium Visual Website',
		description:
			'High-end visual layout focused on atmosphere, spacing, and a stronger premium presentation.',
	},
	{
		title: 'Signal Foundry',
		meta: 'Strategy / Agency Landing',
		description:
			'Clean section rhythm, service framing, and stronger conversion structure for a modern consultancy.',
	},
	{
		title: 'Forma Systems',
		meta: 'B2B Product / Studio Web Presence',
		description:
			'A design-forward company website with restrained UI, clear messaging hierarchy, and polished responsiveness.',
	},
];

export default function WorkShowcase() {
	return (
		<section
			id="work"
			className="border-b border-[#D9D1C7] bg-[#FFFDF8] py-24 md:py-32"
		>
			<Container>
				<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
					<div>
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
							Selected Work
						</p>

						<h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
							A showcase of design-led layouts translated into clean frontend.
						</h2>
					</div>

					<div className="max-w-2xl lg:justify-self-end">
						<p className="text-base leading-8 text-[#5F5851] md:text-lg">
							These concepts represent the kind of websites Nexa Studio is built
							to deliver: premium, structured, and visually controlled digital
							experiences that feel clear, modern, and ready for real brands.
						</p>
					</div>
				</div>

				<div className="mt-14 grid gap-8">
					{featuredProjects.map((project, index) => (
						<article
							key={project.title}
							className="rounded-[32px] border border-[#D9D1C7] bg-[#FBF7F1] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
						>
							<div
								className={`grid gap-5 md:gap-6 ${
									index % 2 === 0
										? 'xl:grid-cols-[1.1fr_0.9fr]'
										: 'xl:grid-cols-[0.9fr_1.1fr]'
								}`}
							>
								<div
									className={`rounded-[28px] ${project.background} p-6 md:p-8 lg:p-10 ${
										index % 2 !== 0 ? 'xl:order-2' : ''
									}`}
								>
									<p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6B645C]">
										{project.eyebrow}
									</p>

									<h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#181716] md:text-4xl">
										{project.title}
									</h3>

									<p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-[#6B645C]">
										{project.category}
									</p>

									<p className="mt-6 max-w-xl text-base leading-8 text-[#5F5851]">
										{project.description}
									</p>

									<div className="mt-8 flex flex-wrap gap-3">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full border border-[#D1B7A2] bg-[#FFF7EF] px-4 py-2 text-sm text-[#181716]"
											>
												{tag}
											</span>
										))}
									</div>
								</div>

								<div className={`grid gap-5 md:gap-6 ${index % 2 !== 0 ? 'xl:order-1' : ''}`}>
									<div
										className={`rounded-[28px] ${project.accent} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8 lg:p-10 ${project.accentText}`}
									>
										<p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
											Visual Direction
										</p>

										<p className="mt-6 text-2xl font-semibold leading-[1.3] tracking-[-0.04em] text-inherit">
											Layouts designed to feel composed, credible, and clearly
											differentiated from generic website templates.
										</p>
									</div>

									<div className="rounded-[28px] border border-[#D9D1C7] bg-[#FFFDF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8 lg:p-10">
										<p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6B645C]">
											Build Focus
										</p>

										<div className="mt-6 grid gap-4 sm:grid-cols-3">
											<div className="rounded-[20px] bg-[#F6F1E8] p-4">
												<p className="text-xs uppercase tracking-[0.16em] text-[#6B645C]">
													Layout
												</p>
												<p className="mt-3 text-base font-medium text-[#181716]">
													Balanced structure
												</p>
											</div>

											<div className="rounded-[20px] bg-[#F6F1E8] p-4">
												<p className="text-xs uppercase tracking-[0.16em] text-[#6B645C]">
													Frontend
												</p>
												<p className="mt-3 text-base font-medium text-[#181716]">
													Clean components
												</p>
											</div>

											<div className="rounded-[20px] bg-[#F6F1E8] p-4">
												<p className="text-xs uppercase tracking-[0.16em] text-[#6B645C]">
													Result
												</p>
												<p className="mt-3 text-base font-medium text-[#181716]">
													Premium delivery
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{supportingProjects.map((project) => (
						<article
							key={project.title}
							className="flex h-full flex-col rounded-[28px] border border-[#D9D1C7] bg-[#FBF7F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
						>
							<p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6B645C]">
								{project.meta}
							</p>

							<h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#181716]">
								{project.title}
							</h3>

							<p className="mt-4 text-base leading-8 text-[#5F5851]">
								{project.description}
							</p>
						</article>
					))}
				</div>

				<div className="mt-12 flex justify-start">
					<Button href="#process" variant="secondary">
						Explore the Process
					</Button>
				</div>
			</Container>
		</section>
	);
}