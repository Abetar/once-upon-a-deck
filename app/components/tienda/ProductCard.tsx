"use client";

import Image from "next/image";
import { useCart } from "./cart/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  game: string;
  image: string;
  rarity: string;
}

export function ProductCard({
  id,
  name,
  price,
  game,
  image,
  rarity,
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      game,
      image,
      rarity,
    });
  };

  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-md shadow-black/40 transition-transform hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-mystic">
      {/* Imagen */}
      <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#050816]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* Aura mística */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-transparent to-[#7C3AED]/20 group-hover:animate-aura-glow" />
      </div>

      {/* Info */}
      <h3 className="text-sm font-semibold text-gray-100">{name}</h3>
      <p className="mt-1 text-xs text-gray-400">
        {game} · {rarity}
      </p>

      {/* Precio */}
      <p className="mt-3 text-lg font-bold text-[#F4D58D]">${price}</p>

      {/* Botón */}
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full rounded-lg bg-[#F4D58D] py-2 text-sm font-semibold text-[#050816] transition hover:bg-[#C9A656]"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
