import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const capabilities = [
  "Design-to-code execution",
  "Responsive frontend systems",
  "Premium visual hierarchy",
];

const miniStats = [
  { value: "01", label: "Creative direction" },
  { value: "02", label: "Clean implementation" },
  { value: "03", label: "Launch-ready polish" },
];

export default function Hero() {
  return (
    <section id="hero" className="border-b border-[#D9D1C7] py-18 md:py-24">
      <Container>
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
            Digital Studio for Modern Brands
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-[#181716] sm:text-6xl lg:text-8xl">
            We turn sharp visual concepts into polished digital experiences.
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-[#5F5851]">
              Nexa Studio builds premium websites for brands that care about
              clarity, presence, and frontend quality. Our approach blends
              strong visual rhythm with clean implementation in Next.js.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button href="#cta">Start a Project</Button>
              <Button href="#work" variant="secondary">
                View Work
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[36px] border border-[#D9D1C7] bg-[#FFFDF8] p-6 shadow-[0_20px_60px_rgba(24,23,22,0.06)] md:p-8">
            <div className="grid gap-6">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] bg-[#EADBC9] p-7 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                    Featured Direction
                  </p>

                  <h2 className="mt-6 max-w-md text-3xl font-semibold tracking-[-0.04em] text-[#181716] md:text-4xl">
                    Design-led websites built with precision and intent.
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-8 text-[#5F5851]">
                    Strong composition, spacious layouts, deliberate typography,
                    and frontend execution that feels considered at every level.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {capabilities.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D1B7A2] bg-[#FFF7EF] px-4 py-2 text-sm text-[#181716]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="rounded-[28px] bg-[#355E57] p-7 text-[#FFFDF8] md:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#EAF3F0]">
                      Studio Note
                    </p>

                    <p className="mt-6 text-2xl font-semibold leading-[1.3] tracking-[-0.04em] text-[#FFFDF8]">
                      Modern brand websites should feel distinct before they try
                      to feel loud.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-[#D9D1C7] bg-[#F1E7DA] p-7 md:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                      Delivery Focus
                    </p>

                    <p className="mt-5 text-lg font-medium leading-8 text-[#181716]">
                      Strategy, design clarity, and responsive frontend quality
                      in one structured build flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {miniStats.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-[24px] border border-[#D9D1C7] bg-[#FCF8F2] p-6"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                      {item.value}
                    </p>
                    <p className="mt-4 text-lg font-medium leading-7 text-[#181716]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] bg-[#B85F43] p-7 text-[#FFFDF8] shadow-[0_18px_50px_rgba(200,108,74,0.18)] md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#FDF1EB]">
                Positioning
              </p>
              <p className="mt-6 text-3xl font-semibold leading-[1.25] tracking-[-0.04em] text-[#FFFDF8]">
                Built to showcase premium Figma-to-Next.js execution.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#D9D1C7] bg-[#FFFDF8] p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                What this project proves
              </p>

              <ul className="mt-6 space-y-4 text-base leading-7 text-[#181716]">
                <li>Pixel-aware spacing and composition</li>
                <li>Clean modular frontend structure</li>
                <li>Responsive implementation with restraint</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}