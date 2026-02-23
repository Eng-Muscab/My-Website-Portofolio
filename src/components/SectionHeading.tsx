import { Container } from "@/components/Container";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const centered = align === "center";
  const textAlign = centered ? "text-center items-center" : "text-left items-start";

  return (
    <Container className="mb-8 sm:mb-12">
      <div className={`relative flex max-w-3xl flex-col gap-3 ${textAlign}`}>
        <div
          className={`pointer-events-none absolute -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl ${centered ? "left-1/2 -translate-x-1/2" : "-left-4"}`}
          aria-hidden="true"
        />
        <p className="relative inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="relative text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[2.1rem]">
          {title}
        </h2>
        {description ? (
          <p className="relative text-sm leading-6 text-muted-foreground sm:text-base">{description}</p>
        ) : null}
        <div className={`relative mt-1 flex w-full items-center gap-3 ${centered ? "justify-center" : ""}`} aria-hidden="true">
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
        </div>
      </div>
    </Container>
  );
}
