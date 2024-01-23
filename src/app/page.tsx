"use client";
import Hero from "@/components/hero/Hero";
import { useEffect, useState } from "react";

const Home = () => {
  // Mouse position
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  // Update mouse position
  const handleMouseMove = (ev: { pageX: any; pageY: any }) => {
    setMousePosition({ left: ev.pageX, top: ev.pageY });

    // Get Sphere box
    let sphere = document.querySelector<HTMLElement>(".sphere-box");

    if (sphere) {
      // Calculate center position of sphere
      let sphereBounding = sphere.getBoundingClientRect();
      let sphereCenter = {
        x: sphereBounding.left + sphereBounding.width / 2,
        y: sphereBounding.top + sphereBounding.height / 2,
      };

      // Initial speed of rotation
      const rotationSpeed = 0.9;

      // Angle change
      let deltaY =
        Math.atan2(sphereCenter.x, mousePosition.left) * (180 / Math.PI);
      let deltaX =
        Math.atan2(sphereCenter.y, mousePosition.top) * (180 / Math.PI);

      // Style transform
      sphere.style.transform = `rotateY(${deltaY * rotationSpeed}deg) rotateX(${
        deltaX * rotationSpeed
      }deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));
    return () => {
      window.removeEventListener("mousemove", (e) => handleMouseMove(e));
    };
  });

  return (
    <main className="container w-full h-auto">
      <Hero />
    </main>
  );
};

export default Home;
