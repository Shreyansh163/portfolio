import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-950";

  const variants = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-400",
    secondary:
      "border border-neutral-800 text-neutral-300 hover:bg-neutral-900",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
