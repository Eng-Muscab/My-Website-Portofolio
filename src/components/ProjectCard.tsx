"use client";

import { ExternalLink, Github, Info } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { buttonVariants } from "@/components/Button";
import { Badge } from "@/components/Badge";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types/content";

type ProjectCardProps = {
  project: ProjectItem;
  onOpen: (project: ProjectItem) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="surface-card surface-card-hover group relative flex h-full flex-col overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/5 to-transparent" aria-hidden="true" />

      <div className="relative h-48 border-b border-border bg-muted p-2">
        <div className="absolute inset-2 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={pickLocaleText(project.name, locale)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="pointer-events-none absolute inset-2 rounded-lg ring-1 ring-white/10" aria-hidden="true" />
        <div className="absolute inset-2 rounded-lg bg-gradient-to-t from-black/40 via-black/0 to-transparent" aria-hidden="true" />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <Badge>{t(`filters.${project.category}`)}</Badge>
          <Badge tone="muted">{project.year}</Badge>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/80 via-cyan-400/80 to-accent/80 opacity-80" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div>
          <h3 className="text-base font-semibold leading-6 text-foreground">{pickLocaleText(project.name, locale)}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{pickLocaleText(project.shortDescription, locale)}</p>
        </div>

        <div className="rounded-xl border border-border/80 bg-muted/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t("features")}</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{pickLocaleText(feature, locale)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <Badge key={tag} tone="muted">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-border/70 pt-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className={buttonVariants({ variant: "outline", size: "sm", className: "hover:-translate-y-0.5" })}
          >
            <Info className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{t("details")}</span>
          </button>

          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "sm", className: "border border-border/80 bg-background/50 hover:-translate-y-0.5" })}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t("demo")}</span>
            </a>
          ) : (
            <span
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "cursor-not-allowed border border-dashed border-border/80 bg-background/40 text-muted-foreground"
              )}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t("comingSoon")}</span>
            </span>
          )}

          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size: "sm", className: "border border-border/80 bg-background/50 hover:-translate-y-0.5" })}
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t("github")}</span>
            </a>
          ) : (
            <span
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "cursor-not-allowed border border-dashed border-border/80 bg-background/40 text-muted-foreground"
              )}
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t("comingSoon")}</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
