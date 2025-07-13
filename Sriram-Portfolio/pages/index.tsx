"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
  Tools,
} from "@/components";
import { motion } from "framer-motion";

// Lazy-load loader
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

export default function Home({ data }: any) {
  const [showSite, setShowSite] = useState(false);

  return (
    <div>
      {!showSite ? (
        <Loader onFinish={() => setShowSite(true)} />
      ) : (
        <motion.div
          id="mainBody"
          className="dark:bg-black bg-white text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Header />

          <section id="hero" className="snap-start">
            <Hero />
          </section>

          <section id="about" className="snap-center">
            <About />
          </section>

          <section id="experience" className="snap-center">
            <Experience />
          </section>

          <section id="skills" className="snap-center">
            <Skills />
          </section>

          <section id="projects" className="snap-center">
            <Projects />
          </section>

          <section id="tools" className="snap-center">
            <Tools />
          </section>

          <section id="contact" className="snap-start">
            <Contact />
          </section>
        </motion.div>
      )}
    </div>
  );
}
