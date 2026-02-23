"use client";

import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDeferredValue, useState } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";
import type { ProjectCategory, ProjectItem } from "@/types/content";

type FilterValue = "all" | ProjectCategory;

type ProjectsProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function Projects({ searchQuery, onSearchChange }: ProjectsProps) {
  const locale = useLocale() as Locale;
  const tSection = useTranslations("sections.projects");
  const tProjects = useTranslations("projects");
  const [filter, setFilter] = useState<FilterValue>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const deferredSearch = useDeferredValue(searchQuery);

  const normalizedSearch = deferredSearch.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    if (filter !== "all" && project.category !== filter) return false;
    if (!normalizedSearch) return true;

    const haystack = [
      pickLocaleText(project.name, locale),
      pickLocaleText(project.shortDescription, locale),
      pickLocaleText(project.longDescription, locale),
      ...project.stack,
      ...project.features.map((feature) => pickLocaleText(feature, locale))
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedSearch);
  });

  const filters: FilterValue[] = ["all", "web", "mobile", "erp", "ai"];

  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <SectionHeading eyebrow={tSection("eyebrow")} title={tSection("title")} description={tSection("description")} />
      <Container>
        <Reveal className="mb-5">
          <div className="surface-card surface-card-hover relative overflow-hidden p-4 sm:p-5 lg:p-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-cyan-400/80 to-accent/80" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="pointer-events-none absolute -left-8 bottom-4 h-16 w-16 rounded-full bg-accent/10 blur-2xl" />

            <div className="relative flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {locale === "so" ? "Shaandhayn + Raadis" : "Filter + Search"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {locale === "so"
                      ? `${filteredProjects.length} / ${projects.length} mashruuc`
                      : `${filteredProjects.length} / ${projects.length} projects`}
                  </span>
                </div>

                <div className="relative">
                  <label className="sr-only" htmlFor="project-search">
                    {tProjects("searchLabel")}
                  </label>
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <input
                    id="project-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder={tProjects("searchPlaceholder")}
                    className="h-11 w-full rounded-xl border border-border/80 bg-background/80 pl-9 pr-4 text-sm shadow-sm outline-none backdrop-blur-sm transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_4px_rgba(14,165,233,0.08)]"
                  />
                </div>
              </div>

              <div className="glass-panel flex flex-wrap gap-2 p-2">
                {filters.map((value) => (
                  <Button
                    key={value}
                    type="button"
                    variant={filter === value ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setFilter(value)}
                    aria-pressed={filter === value}
                  >
                    {tProjects(`filters.${value}`)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.02}>
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="surface-card p-6 text-center text-sm text-muted-foreground">{tProjects("noResults")}</div>
          </Reveal>
        )}
      </Container>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
