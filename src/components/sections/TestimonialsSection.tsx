import Container from "@/components/layout/Container";

const testimonials = [
  {
    quote:
      "The final website felt incredibly polished. The layout rhythm, typography, and overall structure made the brand look far more established.",
    name: "Laura Jensen",
    role: "Marketing Director",
    company: "Atlas Atelier",
  },
  {
    quote:
      "What stood out most was how carefully the frontend preserved the design intent. Nothing felt generic or templated.",
    name: "Daniel Ross",
    role: "Founder",
    company: "Northline Ventures",
  },
  {
    quote:
      "The collaboration was structured and clear from start to finish. Every stage of the process made sense and moved the project forward.",
    name: "Sophie Laurent",
    role: "Brand Strategist",
    company: "Signal Foundry",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-b border-[#D9D1C7] bg-[#FBF7F1] py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
              Client Feedback
            </p>

            <h2 className="mt-6 max-w-md text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
              Trusted by teams that care about how their brand appears online.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#181716]">
              Strong websites are not only measured by performance or features.
              They are judged by how confidently they represent a brand.
            </p>

            <p className="mt-6 text-base leading-8 text-[#5F5851]">
              These testimonials reflect the kind of results that thoughtful
              design implementation and careful frontend execution can achieve.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-[28px] border border-[#D9D1C7] bg-[#FFFDF8] p-7 md:p-8"
            >
              <p className="text-base leading-8 text-[#181716]">
                “{testimonial.quote}”
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold text-[#181716]">
                  {testimonial.name}
                </p>

                <p className="text-sm text-[#5F5851]">
                  {testimonial.role} — {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}