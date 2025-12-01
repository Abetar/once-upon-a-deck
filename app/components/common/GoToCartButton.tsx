// components/common/GoToCartButton.tsx
"use client";

import { useEffect, useState } from "react";

export function GoToCartButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // mostrar solo cuando haya scroll
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToCart = () => {
    const cart = document.getElementById("cart-section");
    if (cart) {
      cart.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={goToCart}
      className="
        fixed
        bottom-20 left-4
        z-40 md:hidden
        flex items-center gap-2
        rounded-full
        px-4 py-2
        bg-[#F4D58D] text-[#050816]
        font-semibold text-sm
        shadow-lg shadow-black/40
        border border-[#F4D58D]/80
        transition
        hover:bg-[#C9A656]
      "
    >
      {/* Icono de carrito */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M10 17h4' />
      </svg>
      Ir al carrito
    </button>
  );
}
