import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="hero"
          className="flex min-h-[calc(100vh-80px)] items-center border-b border-[#D9D1C7]"
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
                Editorial Direction Reset
              </p>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[#181716] sm:text-6xl lg:text-7xl">
                Nexa Studio is shifting into a warmer, more original agency direction.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B645C]">
                We are replacing the previous SaaS-like visual system with an
                editorial layout, stronger typography, and a more design-forward
                website structure.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="flex min-h-[50vh] items-center justify-center border-b border-[#D9D1C7]"
        >
          <div className="px-6 text-center text-3xl font-semibold text-[#181716]">
            Services
          </div>
        </section>

        <section
          id="work"
          className="flex min-h-[50vh] items-center justify-center border-b border-[#D9D1C7]"
        >
          <div className="px-6 text-center text-3xl font-semibold text-[#181716]">
            Work
          </div>
        </section>

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