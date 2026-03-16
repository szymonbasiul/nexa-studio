import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="services"
          className="flex min-h-[60vh] items-center justify-center border-b border-white/10"
        >
          <div className="px-6 text-center text-3xl font-semibold text-white">
            Services
          </div>
        </section>

        <section
          id="work"
          className="flex min-h-[60vh] items-center justify-center border-b border-white/10"
        >
          <div className="px-6 text-center text-3xl font-semibold text-white">
            Work
          </div>
        </section>

        <section
          id="process"
          className="flex min-h-[60vh] items-center justify-center border-b border-white/10"
        >
          <div className="px-6 text-center text-3xl font-semibold text-white">
            Process
          </div>
        </section>

        <section
          id="about"
          className="flex min-h-[60vh] items-center justify-center border-b border-white/10"
        >
          <div className="px-6 text-center text-3xl font-semibold text-white">
            About
          </div>
        </section>

        <section
          id="testimonials"
          className="flex min-h-[60vh] items-center justify-center border-b border-white/10"
        >
          <div className="px-6 text-center text-3xl font-semibold text-white">
            Testimonials
          </div>
        </section>

        <section
          id="cta"
          className="flex min-h-[60vh] items-center justify-center"
        >
          <div className="px-6 text-center text-3xl font-semibold text-white">
            CTA
          </div>
        </section>
      </main>
    </>
  );
}