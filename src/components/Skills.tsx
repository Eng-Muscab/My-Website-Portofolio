"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  const tSections = useTranslations("sections.skills");
  const tSkills = useTranslations("skills");

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <SectionHeading eyebrow={tSections("eyebrow")} title={tSections("title")} description={tSections("description")} />
      <Container>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.03}>
              <div className="surface-card surface-card-hover h-full p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-foreground">{tSkills(`categories.${group.category}`)}</h3>
                  <Badge tone="muted">{group.items.length}</Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.div
                      key={`${group.category}-${item.name}`}
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1.5 text-xs transition-colors hover:border-primary/25 hover:bg-primary/5"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <Badge tone={item.level === "strong" ? "accent" : item.level === "good" ? "default" : "muted"} className="px-2 py-0.5 text-[10px]">
                        {tSkills(`level.${item.level}`)}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
