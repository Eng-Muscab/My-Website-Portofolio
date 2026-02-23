"use client";

import { useState } from "react";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";

export function HomePage() {
  const [projectSearch, setProjectSearch] = useState("");

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-[-8rem] top-[28rem] h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute left-1/2 top-[64rem] h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-[18%] top-[32rem] h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute right-[16%] top-[96rem] h-48 w-48 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-0 top-6 h-[28rem] rounded-[2rem] bg-gradient-to-b from-primary/5 via-cyan-400/5 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <About />
          <Skills />
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-4 top-10 h-[36rem] rounded-[2.5rem] border border-primary/10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
            aria-hidden="true"
          />
          <Projects searchQuery={projectSearch} onSearchChange={setProjectSearch} />
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-0 top-4 h-[22rem] bg-gradient-to-b from-amber-200/10 via-primary/5 to-transparent blur-3xl dark:from-amber-300/5"
            aria-hidden="true"
          />
          <Services />
          <Testimonials />
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-6 top-8 h-[20rem] rounded-[2rem] border border-border/40 bg-gradient-to-br from-primary/4 via-transparent to-cyan-400/6"
            aria-hidden="true"
          />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
