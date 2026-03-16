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
  const styles =
    variant === "primary"
      ? "bg-[#181716] text-[#FFFDF8] hover:bg-[#2A2825]"
      : "border border-[#D9D1C7] bg-[#FFFDF8] text-[#181716] hover:bg-[#F1E7DA]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 ${styles}`}
    >
      {children}
    </Link>
  );
}