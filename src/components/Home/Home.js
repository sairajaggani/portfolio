import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import ImpactMetrics from "./ImpactMetrics";
import About from "../About/About";
import Projects from "../Projects/Projects";
import GitHub from "../GitHub/GitHub";
import Resume from "../Resume/ResumeNew";
import Contact from "../Contact/Contact";
import ScrollReveal from "../ScrollReveal";

function Home({ theme }) {
  return (
    <section>
      <Particle theme={theme} />
      <Home2 />

      <ScrollReveal>
        <ImpactMetrics />
      </ScrollReveal>

      <section id="about">
        <ScrollReveal>
          <About />
        </ScrollReveal>
      </section>

      <section id="projects">
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
      </section>

      <section id="github">
        <ScrollReveal>
          <GitHub theme={theme} />
        </ScrollReveal>
      </section>

      <section id="resume">
        <ScrollReveal>
          <Resume />
        </ScrollReveal>
      </section>

      <section id="contact">
        <ScrollReveal variant="scale">
          <Contact />
        </ScrollReveal>
      </section>
    </section>
  );
}

export default Home;
