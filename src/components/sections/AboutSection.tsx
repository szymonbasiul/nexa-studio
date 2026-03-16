import Container from '@/components/layout/Container';

const highlights = [
	{
		title: 'Design-aware implementation',
		description:
			'Frontend decisions are made with layout intent, typography balance, and visual hierarchy in mind.',
	},
	{
		title: 'Structured component thinking',
		description:
			'Sections are built to feel coherent as a whole while remaining modular, reusable, and easy to maintain.',
	},
	{
		title: 'Responsive without compromise',
		description:
			'The goal is not just technical responsiveness, but preserving clarity and rhythm across every screen size.',
	},
	{
		title: 'Polish that builds trust',
		description:
			'Small details in spacing, alignment, and contrast make the final website feel more credible and premium.',
	},
];

export default function AboutSection() {
	return (
		<section
			id="about"
			className="border-b border-[#D9D1C7] bg-[#FFFDF8] py-24 md:py-32"
		>
			<Container>
				<div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
					<div>
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
							About the Approach
						</p>

						<h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
							Built with the same care that strong brands expect from their design.
						</h2>
					</div>

					<div className="max-w-2xl">
						<p className="text-lg leading-8 text-[#181716]">
							Nexa Studio is a portfolio concept built to represent how premium
							websites should be developed: with clear structure, thoughtful
							pacing, and frontend quality that supports the original visual idea.
						</p>

						<p className="mt-6 text-base leading-8 text-[#5F5851]">
							The goal is not only to convert a design into code, but to keep
							the final website feeling intentional, composed, and ready to
							represent a modern business with confidence.
						</p>
					</div>
				</div>

				<div className="mt-16 rounded-[32px] border border-[#D9D1C7] bg-[#FBF7F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-12">
					<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
						<div>
							<p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
								Studio Perspective
							</p>

							<h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-[#181716] md:text-4xl">
								The best frontend work protects the design idea instead of
								flattening it during implementation.
							</h3>
						</div>

						<div className="rounded-[28px] bg-[#F1E7DA] p-7 md:p-8">
							<p className="text-base leading-8 text-[#181716]">
								That means preserving proportion, respecting whitespace, and
								making responsive adjustments that still feel aligned with the
								original concept. Good code should support clarity, not reduce it.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{highlights.map((item) => (
						<article
							key={item.title}
							className="flex h-full flex-col rounded-[28px] border border-[#D9D1C7] bg-[#FBF7F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
						>
							<h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#181716]">
								{item.title}
							</h3>

							<p className="mt-4 text-base leading-8 text-[#5F5851]">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}