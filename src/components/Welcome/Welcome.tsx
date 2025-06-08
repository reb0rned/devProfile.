import "../Welcome/Welcome.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export const Welcome = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="welcome">
      <div className="welcome__leftside">
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

        <h2>
          <span className="welcome__leftside-aqua">Just a chill guy</span> with
          some code experience...
        </h2>
      </div>
      <div className="welcome__container">
        <div className="welcome__container__info">
          <div className="welcome__container__info-innerBlock">
            <div className="welcome__container__infoPhoto"></div>
            <h2 className="welcome__container__infoName">Dmytro Kashchenko</h2>
            <h5 className="welcome__container__infoPostition">
              🚀 Full Stack Developer | Frontend Enthusiast
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
