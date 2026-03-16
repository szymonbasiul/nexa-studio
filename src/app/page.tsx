import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StudioIntro from '@/components/sections/StudioIntro';
import WorkShowcase from '@/components/sections/WorkShowcase';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/sections/Footer';
export default function Home() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<StudioIntro />
				<WorkShowcase />
				<ProcessSection />
				<AboutSection />
        <TestimonialsSection />
        <CtaSection />
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
      <Footer/>
		</>
	);
}
