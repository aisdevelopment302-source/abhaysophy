import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary:
    "bg-accent text-primary hover:bg-accent-yellow font-bold",
  secondary:
    "bg-surface text-text hover:bg-surface-hover font-medium",
  outline:
    "border border-border text-text hover:border-accent hover:text-accent font-medium",
  ghost:
    "text-muted hover:text-text font-medium",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-wider",
  md: "px-6 py-3 text-sm tracking-wider",
  lg: "px-8 py-4 text-sm tracking-widest",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full transition-all duration-300 uppercase ${
    variants[variant]
  } ${sizes[size]} ${fullWidth ? "w-full" : ""} ${
    disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
}
