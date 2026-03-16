import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export default function CtaSection() {
	return (
		<section
			id="cta"
			className="border-b border-[#D9D1C7] bg-[#FFFDF8] py-24 md:py-32"
		>
			<Container>
				<div className="rounded-[32px] border border-[#D9D1C7] bg-[#FBF7F1] px-6 py-12 text-center shadow-[0_20px_60px_rgba(24,23,22,0.05)] md:px-10 md:py-16">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
						Start a Project
					</p>

					<h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
						Ready to build a website that represents your brand clearly?
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F5851]">
						Nexa Studio focuses on structured layouts, clean frontend
						implementation, and websites that feel intentional from the first
						scroll to the final section.
					</p>

					<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button href="#hero">Start a Project</Button>

						<Button href="#work" variant="secondary">
							View Work
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}