"use client";

import Image from "next/image";
import { useCart } from "./cart/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number; // aquí sigue siendo number, pero 0 = cotizar
  game: string;
  image: string;
  rarity: string;
  sealed?: boolean; // true si la carta está sellada
}

export function ProductCard({
  id,
  name,
  price,
  game,
  image,
  rarity,
  sealed,
}: ProductCardProps) {
  const { addItem } = useCart();

  const isQuoteOnly = price === 0;

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price, // se queda en 0, pero lo tratamos como "cotizar"
      game,
      image,
      rarity,
      // NOTA: no enviamos "sealed" al carrito todavía para no romper el tipo CartItem
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
      </div>

      {/* Nombre + juego/rareza */}
      <h3 className="text-sm font-semibold text-gray-100">{name}</h3>
      <p className="mt-1 text-xs text-gray-400">
        {game} · {rarity}
      </p>

      {/* Label de sellado */}
      {sealed && (
        <span className="mt-2 inline-flex items-center rounded-full border border-emerald-400/60 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
          Sellada ✨
        </span>
      )}

      {/* Precio / Cotizar */}
      {isQuoteOnly ? (
        <p className="mt-3 inline-flex rounded-full bg-[#F4D58D]/10 px-3 py-1 text-xs font-semibold text-[#F4D58D]">
          Cotizar por WhatsApp
        </p>
      ) : (
        <p className="mt-3 text-lg font-bold text-[#F4D58D]">${price}</p>
      )}

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full rounded-lg bg-[#F4D58D] py-2 text-sm font-semibold text-[#050816] transition hover:bg-[#C9A656]"
      >
        {isQuoteOnly ? "Agregar para cotizar" : "Agregar al carrito"}
      </button>
    </div>
  );
}
