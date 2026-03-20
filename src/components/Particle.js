import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = ({ theme }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const isDark = theme !== "light";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: isDark ? "#000000" : "#8197ad" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 2},
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: isDark
              ? ["#4ade80", "#94a3b8"]
              : ["#16a34a", "#64748b"],
          },
          links: {
            color: isDark ? "#4ade80" : "#16a34a",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.07 : 0.06,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            value: 50,
            density: { enable: true, area: 900 },
          },
          opacity: {
            value: { min: 0.2, max: 0.55 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.2,
              sync: false,
            },
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
