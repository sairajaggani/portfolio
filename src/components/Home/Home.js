import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import About from "../About/About";
import Projects from "../Projects/Projects";
import GitHub from "../GitHub/GitHub";
import Resume from "../Resume/ResumeNew";
import Contact from "../Contact/Contact";

function Home({ theme }) {
  return (
    <section>
      <Particle theme={theme} />
      <Home2 />

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="github">
        <GitHub theme={theme} />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </section>
  );
}

export default Home;
