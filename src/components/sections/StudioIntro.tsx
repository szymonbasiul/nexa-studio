import Container from "@/components/layout/Container";

const principles = [
  {
    number: "01",
    title: "Clear visual structure",
    description:
      "We build pages with stronger rhythm, deliberate spacing, and hierarchy that feels intentional from the first section to the last.",
  },
  {
    number: "02",
    title: "Design-aware frontend",
    description:
      "Our implementation focuses on preserving layout quality, typography balance, and interface consistency across screen sizes.",
  },
  {
    number: "03",
    title: "Polished delivery",
    description:
      "The result is not just responsive code, but a website that feels refined, credible, and ready to represent a modern brand.",
  },
];

export default function StudioIntro() {
  return (
    <section
      id="services"
      className="border-b border-[#D9D1C7] bg-[#FBF7F1] py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
              Studio Intro
            </p>

            <h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
              Built for brands that want stronger visual presence online.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-1">
            <p className="text-lg leading-8 text-[#181716]">
              Nexa Studio creates modern websites where layout, typography, and
              frontend execution work together. We focus on clarity, pace, and
              visual confidence, so the final result feels premium instead of
              generic.
            </p>

            <p className="mt-6 text-base leading-8 text-[#5F5851]">
              This project is designed to represent a realistic client scenario:
              a design-forward studio website translated into clean, responsive
              code with attention to detail and a structured component approach.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[36px] border border-[#D9D1C7] bg-[#FFFDF8] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
                What shapes the work
              </p>

              <h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-[#181716] md:text-4xl">
                Clean implementation matters more when the design depends on
                spacing, restraint, and visual control.
              </h3>
            </div>

            <div className="rounded-[28px] bg-[#F1E7DA] p-7 md:p-8">
              <p className="text-base leading-8 text-[#181716]">
                We treat frontend as part of the brand experience, not just as a
                technical handoff. That means preserving intent, respecting
                composition, and building layouts that still feel sharp outside
                the static design file.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="flex h-full flex-col rounded-[28px] border border-[#D9D1C7] bg-[#FFFDF8] p-7 md:p-8"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                {principle.number}
              </p>

              <h4 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#181716]">
                {principle.title}
              </h4>

              <p className="mt-4 text-base leading-8 text-[#5F5851]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}