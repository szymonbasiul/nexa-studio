import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const stats = [
  { value: "24+", label: "Launch-ready screens" },
  { value: "100%", label: "Responsive structure" },
  { value: "Next.js", label: "Production-focused stack" },
];

const featureTags = [
  "UI Systems",
  "Frontend Build",
  "Responsive Layouts",
  "Premium Interactions",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,92,255,0.22),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(91,140,255,0.18),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#98A2B3]">
              Digital Product Studio
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              We build modern websites that feel premium from the first scroll.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#98A2B3] md:text-lg">
              Nexa Studio helps ambitious brands launch sharp, conversion-focused
              digital experiences with clean frontend execution, polished layouts,
              and performance-minded builds.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#cta">Start a Project</Button>
              <Button href="#work" variant="secondary">
                View Work
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {featureTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C7D0E0]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#98A2B3]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-[620px]">
              <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-[#7C5CFF]/30 blur-3xl md:block" />
              <div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-[#5B8CFF]/30 blur-3xl md:block" />

              <div className="relative rounded-[32px] border border-white/10 bg-[#11162A]/80 p-4 shadow-[0_25px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[24px] border border-white/10 bg-[#0F1426] p-4 md:p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Nexa Studio — Project Snapshot
                      </p>
                      <p className="mt-1 text-xs text-[#98A2B3]">
                        Premium web design and frontend delivery
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
                    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(124,92,255,0.18),rgba(255,255,255,0.02))] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#C7D0E0]">
                          Active Project
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white">
                          Live Build
                        </span>
                      </div>

                      <h3 className="mt-6 max-w-sm text-2xl font-semibold tracking-tight text-white">
                        Launch-ready agency websites with premium UX rhythm.
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-[#B6C2D9]">
                        Structured sections, clean typography, strategic CTAs,
                        and responsive implementation designed to feel sharp on
                        every device.
                      </p>

                      <div className="mt-8 grid grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <p className="text-xs text-[#98A2B3]">Sections</p>
                          <p className="mt-2 text-lg font-semibold text-white">08</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <p className="text-xs text-[#98A2B3]">Stack</p>
                          <p className="mt-2 text-lg font-semibold text-white">Next</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <p className="text-xs text-[#98A2B3]">Speed</p>
                          <p className="mt-2 text-lg font-semibold text-white">Fast</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#98A2B3]">
                          Capabilities
                        </p>

                        <div className="mt-4 space-y-3">
                          <div className="rounded-2xl border border-white/10 bg-[#0B1020]/70 p-3">
                            <p className="text-sm font-medium text-white">
                              Pixel-perfect implementation
                            </p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-[#0B1020]/70 p-3">
                            <p className="text-sm font-medium text-white">
                              Reusable component systems
                            </p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-[#0B1020]/70 p-3">
                            <p className="text-sm font-medium text-white">
                              Clean responsive frontend
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#98A2B3]">
                          Delivery Flow
                        </p>

                        <div className="mt-4 space-y-4">
                          <div>
                            <div className="mb-2 flex items-center justify-between text-xs text-[#98A2B3]">
                              <span>Design direction</span>
                              <span>92%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="h-2 w-[92%] rounded-full bg-[#7C5CFF]" />
                            </div>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center justify-between text-xs text-[#98A2B3]">
                              <span>Frontend build</span>
                              <span>88%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="h-2 w-[88%] rounded-full bg-[#5B8CFF]" />
                            </div>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center justify-between text-xs text-[#98A2B3]">
                              <span>Polish & QA</span>
                              <span>96%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <div className="h-2 w-[96%] rounded-full bg-[#8B5CF6]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#98A2B3]">
                        Strategy
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white">
                        Structured messaging and stronger CTA flow.
                      </p>
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#98A2B3]">
                        Interface
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white">
                        Premium cards, spacing, hierarchy, and visual rhythm.
                      </p>
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#98A2B3]">
                        Development
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white">
                        Typed components and responsive implementation in Next.js.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-[24px] border border-white/10 bg-[#11162A]/90 p-4 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block">
                <p className="text-xs uppercase tracking-[0.18em] text-[#98A2B3]">
                  Performance layer
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Built for sharp delivery and clean frontend quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}