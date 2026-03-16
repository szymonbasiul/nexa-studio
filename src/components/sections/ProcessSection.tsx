import Container from '@/components/layout/Container';

const steps = [
	{
		number: '01',
		title: 'Discovery',
		description:
			'Understanding the brand, goals, and positioning. This phase defines the structure, messaging direction, and overall website intent.',
	},
	{
		number: '02',
		title: 'Design Direction',
		description:
			'Establishing visual rhythm, layout hierarchy, and the overall design language that shapes the final digital presence.',
	},
	{
		number: '03',
		title: 'Frontend Build',
		description:
			'Translating the design into responsive components using Next.js with attention to spacing, typography, and structural clarity.',
	},
	{
		number: '04',
		title: 'Refinement',
		description:
			'Final adjustments, responsiveness improvements, and polishing details that elevate the experience across devices.',
	},
];

export default function ProcessSection() {
	return (
		<section
			id="process"
			className="border-b border-[#D9D1C7] bg-[#FBF7F1] py-24 md:py-32"
		>
			<Container>
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					<div>
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
							Process
						</p>

						<h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
							A structured approach from concept to polished website.
						</h2>
					</div>

					<div className="max-w-2xl">
						<p className="text-lg leading-8 text-[#181716]">
							Great websites rarely happen by accident. Each project follows a
							clear sequence that keeps decisions intentional and the final
							result visually controlled.
						</p>

						<p className="mt-6 text-base leading-8 text-[#5F5851]">
							This workflow ensures the project moves from strategic clarity to
							clean frontend implementation without losing design intent along
							the way.
						</p>
					</div>
				</div>

				<div className="mt-16 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
					<div className="grid gap-6">
						{steps.map((step) => (
							<div
								key={step.number}
								className="rounded-[28px] border border-[#D9D1C7] bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
							>
								<p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B645C]">
									{step.number}
								</p>

								<h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#181716]">
									{step.title}
								</h3>

								<p className="mt-4 text-base leading-8 text-[#5F5851]">
									{step.description}
								</p>
							</div>
						))}
					</div>

					<div className="rounded-[32px] border border-[#D9D1C7] bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10">
						<p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6B645C]">
							Collaboration
						</p>

						<h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#181716]">
							Clear communication keeps projects moving forward.
						</h3>

						<p className="mt-6 text-base leading-8 text-[#5F5851]">
							Each stage of the process keeps decisions transparent and
							structured. Clients always understand what is happening and why
							the next step matters.
						</p>

						<div className="mt-8 grid gap-4">
							<div className="rounded-[20px] bg-[#F6F1E8] p-4">
								<p className="text-sm text-[#181716]">Defined milestones</p>
							</div>

							<div className="rounded-[20px] bg-[#F6F1E8] p-4">
								<p className="text-sm text-[#181716]">
									Consistent design feedback loops
								</p>
							</div>

							<div className="rounded-[20px] bg-[#F6F1E8] p-4">
								<p className="text-sm text-[#181716]">
									Responsive implementation reviews
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}