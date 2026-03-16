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
      </main>
      <Footer/>
		</>
	);
}
