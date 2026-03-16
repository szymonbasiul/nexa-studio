import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="border-b border-[#D9D1C7] bg-[#FFFDF8] py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B645C]">
            Start a Project
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[#181716] md:text-5xl">
            Ready to build a website that represents your brand clearly?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5F5851]">
            Nexa Studio focuses on structured layouts, clean frontend
            implementation, and websites that feel intentional from the first
            scroll to the final section.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#contact">Start a Project</Button>

            <Button href="#work" variant="secondary">
              View Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}