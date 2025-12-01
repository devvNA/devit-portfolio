import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "outline"
    | "accent"
    | "neon"
    | "neon-secondary";
  className?: string;
}

export function Badge({
  children,
  variant = "accent",
  className = "",
}: BadgeProps) {
  const variantClass = `badge-${variant}`;

  return (
    <span className={`badge ${variantClass} ${className}`}>{children}</span>
  );
}
