"use client"; // Ensure this runs only on the client

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Import loadSlim instead of loadFull
import type { Engine } from "tsparticles-engine"; // Import Engine type

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Init"); // Debugging
    await loadSlim(engine); // Load a smaller version of the particles engine
  }, []);

  return (
    <Particles
      className="absolute inset-0 z-0"
      init={particlesInit}
      options={{
        background: { color: "#1a1a2e" },
        particles: {
          number: { value: 50 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          size: { value: 3 },
        },
      }}
    />
  );
}
