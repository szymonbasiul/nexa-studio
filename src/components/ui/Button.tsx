import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200";

  const primary =
    "bg-[#181716] text-[#FFFDF8] hover:bg-[#2A2825] hover:translate-y-[-1px]";

  const secondary =
    "border border-[#D9D1C7] bg-[#FFFDF8] text-[#181716] hover:bg-[#F3E9DE]";

  const styles = variant === "primary" ? primary : secondary;

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}