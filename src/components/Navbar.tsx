"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// Fix: Import the necessary type for the engine
import type { Engine } from "tsparticles-engine"; // <--- Add this import

export default function Navbar() {
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-transparent");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix: Use the imported Engine type instead of 'any'
  const particlesInit = async (engine: Engine) => { // <--- Change 'any' to 'Engine'
    await loadSlim(engine);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full ${bgColor} backdrop-blur-lg z-50 transition-all duration-300`}>
      {/* Particles Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
          },
        }}
        className="absolute inset-0 w-full h-full z-[-1]"
      />

      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-all">
          Sean Alexander B. Cruz
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-blue-500 transition-all">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-500 transition-all">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-500 transition-all">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-500 transition-all">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}