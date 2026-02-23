import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  tone = "default"
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "default" && "border-primary/20 bg-primary/10 text-primary",
        tone === "accent" && "border-accent/20 bg-accent/10 text-accent",
        tone === "muted" && "border-border bg-muted/70 text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
