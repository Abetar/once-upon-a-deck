// components/common/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        bottom-4 left-4                     /* 🔥 MOVIDO A LA IZQUIERDA */
        z-40
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-[#F4D58D]/70
        bg-[#050816]/95 text-[#F4D58D]
        shadow-lg shadow-black/60
        backdrop-blur
        transition
        hover:bg-[#F4D58D] hover:text-[#050816]
        md:bottom-6 md:left-6              /* 🔥 Ajuste en pantallas más grandes */
      "
      aria-label="Volver arriba"
    >
      {/* Flecha hacia arriba */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
