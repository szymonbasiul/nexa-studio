import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StudioIntro from '@/components/sections/StudioIntro';
import WorkShowcase from '@/components/sections/WorkShowcase';
import ProcessSection from '@/components/sections/ProcessSection';
export default function Home() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<StudioIntro />
				<WorkShowcase />
				<ProcessSection />
				<section
					id="process"
					className="flex min-h-[50vh] items-center justify-center border-b border-[#D9D1C7]"
				>
					<div className="px-6 text-center text-3xl font-semibold text-[#181716]">
						Process
					</div>
				</section>

				<section
					id="about"
					className="flex min-h-[50vh] items-center justify-center border-b border-[#D9D1C7]"
				>
					<div className="px-6 text-center text-3xl font-semibold text-[#181716]">
						About
					</div>
				</section>

				<section
					id="testimonials"
					className="flex min-h-[50vh] items-center justify-center border-b border-[#D9D1C7]"
				>
					<div className="px-6 text-center text-3xl font-semibold text-[#181716]">
						Testimonials
					</div>
				</section>

				<section
					id="cta"
					className="flex min-h-[50vh] items-center justify-center"
				>
					<div className="px-6 text-center text-3xl font-semibold text-[#181716]">
						CTA
					</div>
				</section>
			</main>
		</>
	);
}
