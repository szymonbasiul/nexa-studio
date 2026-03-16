import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            Nexa Studio
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#98A2B3] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Button href="#cta">Start a Project</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}