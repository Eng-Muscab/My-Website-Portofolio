"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Server,
  Smartphone,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type ServiceItem = {
  key:
    | "institutionalSystems"
    | "inventoryModules"
    | "reportsDashboards"
    | "mobileApps"
    | "apiDevelopment"
    | "aiFeatures";
  icon: LucideIcon;
};

const serviceItems: ServiceItem[] = [
  { key: "institutionalSystems", icon: BrainCircuit },
  { key: "inventoryModules", icon: Bot },
  { key: "reportsDashboards", icon: BarChart3 },
  { key: "mobileApps", icon: Smartphone },
  { key: "apiDevelopment", icon: Server },
  { key: "aiFeatures", icon: Workflow }
];

export function Services() {
  const tSection = useTranslations("sections.services");
  const tItems = useTranslations("services.items");

  return (
    <section id="services" className="relative py-16 sm:py-20">
      <SectionHeading eyebrow={tSection("eyebrow")} title={tSection("title")} description={tSection("description")} />
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.key} delay={index * 0.03}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="surface-card surface-card-hover group relative h-full overflow-hidden p-5"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-xl transition-transform duration-300 group-hover:scale-125" />
                  <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 group-hover:rotate-3 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-4 text-base font-semibold text-foreground">{tItems(`${item.key}.title`)}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-muted-foreground">{tItems(`${item.key}.description`)}</p>
                  <div className="relative mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary/70 to-accent/70 opacity-70 transition-all duration-300 group-hover:w-24" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
