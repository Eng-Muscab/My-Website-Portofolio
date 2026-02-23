"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

import { Badge } from "@/components/Badge";
import { buttonVariants, Button } from "@/components/Button";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";
import type { ProjectItem } from "@/types/content";

type ProjectModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-background/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${project.id}-title`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-soft sm:rounded-2xl"
          >
            <div className="relative h-52 border-b border-border bg-muted sm:h-64">
              <Image
                src={project.image}
                alt={pickLocaleText(project.name, locale)}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute right-3 top-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-9 w-9 rounded-full bg-background/85 p-0 backdrop-blur"
                  aria-label={t("closeModal")}
                  onClick={onClose}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="overflow-y-auto p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{t(`filters.${project.category}`)}</Badge>
                <Badge tone="muted">{project.year}</Badge>
              </div>

              <h3 id={`${project.id}-title`} className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {pickLocaleText(project.name, locale)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {pickLocaleText(project.longDescription, locale)}
              </p>

              <div className="mt-5 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("features")}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{pickLocaleText(feature, locale)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("stack")}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} tone="muted">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.demo ? (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className={buttonVariants()}>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {t("demo")}
                  </a>
                ) : (
                  <span className={buttonVariants({ variant: "outline", className: "cursor-not-allowed text-muted-foreground" })}>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {t("comingSoon")}
                  </span>
                )}

                {project.links.github ? (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "secondary" })}>
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {t("github")}
                  </a>
                ) : (
                  <span className={buttonVariants({ variant: "outline", className: "cursor-not-allowed text-muted-foreground" })}>
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {t("comingSoon")}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
