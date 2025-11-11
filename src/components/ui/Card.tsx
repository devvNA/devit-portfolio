import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div className={`card ${hover ? "card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-sm text-[var(--text-light)] ${className}`}>
      {children}
    </p>
  );
}
