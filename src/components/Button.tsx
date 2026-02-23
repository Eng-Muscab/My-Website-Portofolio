"use client";

import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export function buttonVariants({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium leading-none transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.99]",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary" &&
      "border border-primary/30 bg-gradient-to-r from-primary via-sky-500 to-cyan-400 text-primary-foreground shadow-[0_10px_26px_-14px_rgba(14,165,233,0.65)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_14px_36px_-16px_rgba(14,165,233,0.75)]",
    variant === "secondary" &&
      "border border-secondary/30 bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-secondary/90",
    variant === "ghost" && "bg-transparent text-foreground hover:bg-muted/70",
    variant === "outline" &&
      "border border-border/80 bg-background/80 shadow-sm backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/25 hover:bg-card",
    size === "sm" && "h-9 px-3 text-sm",
    size === "md" && "h-10 px-4 text-sm sm:text-base",
    size === "lg" && "h-11 px-5 text-sm sm:text-base",
    className
  );
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ className, variant, size, ...props }: Props) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
