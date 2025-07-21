import React from "react";


import Particle from "../Particle";
import Home2 from "./Home2";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Particle />
      <Home2 />
    
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>
    </section>
  );
}

export default Home;
