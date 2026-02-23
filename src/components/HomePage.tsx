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
        <About />
        <Skills />
        <Projects searchQuery={projectSearch} onSearchChange={setProjectSearch} />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
