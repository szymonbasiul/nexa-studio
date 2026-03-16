import Container from "@/components/layout/Container";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FBF7F1] py-14 md:py-16">
      <Container>
        <div className="grid gap-10 border-t border-[#D9D1C7] pt-10 md:grid-cols-[1.1fr_0.9fr] md:pt-12">
          <div className="max-w-md">
            <a
              href="#hero"
              className="text-lg font-semibold tracking-tight text-[#181716] transition-opacity hover:opacity-80"
            >
              Nexa Studio
            </a>

            <p className="mt-4 text-base leading-8 text-[#5F5851]">
              Premium websites built with clear structure, careful frontend
              execution, and a stronger visual presence for modern brands.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:justify-self-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                Navigation
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base text-[#181716] transition-colors hover:text-[#B85F43]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6B645C]">
                Studio Note
              </p>

              <p className="mt-5 text-base leading-8 text-[#5F5851]">
                Designed as a portfolio concept to showcase premium
                Figma-to-Next.js implementation and editorial frontend quality.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#D9D1C7] pt-6 text-sm text-[#6B645C] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Nexa Studio. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}