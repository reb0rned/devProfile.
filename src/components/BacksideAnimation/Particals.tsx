import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particals = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="welcome__particles"
      options={{
        fullScreen: true,
        background: { color: { value: "transparent" } },
        zIndex: 0,
        particles: {
          number: {
            value: 100,
            density: { enable: true, area: 900 },
          },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: { enable: true, minimumValue: 0.3 },
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: { enable: true, minimumValue: 1.5 },
            anim: { enable: true, speed: 4, size_min: 1, sync: false },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: true,
            straight: false,
            outModes: "out",
            attract: { enable: false },
          },
          shadow: {
            enable: true,
            color: "#00ffff",
            blur: 10,
            offset: { x: 0, y: 0 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false },
            },
            onClick: {
              enable: false,
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.6,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
