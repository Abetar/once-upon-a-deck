// app/components/home/GamesShowcaseSection.tsx
"use client";

import Image from "next/image";

const GAMES = [
  {
    name: "Lorcana",
    image: "/games/lorcana-card.png", // 👈 cambia a tus rutas reales
  },
  {
    name: "Pokémon",
    image: "/games/pokemon-card.jpg",
  },
  {
    name: "Yu-Gi-Oh!",
    image: "/games/yugioh-card.jpg",
  },
  {
    name: "Magic: The Gathering",
    image: "/games/magic-card.jpg",
  },
  {
    name: "One Piece",
    image: "/games/onepiece-card.jpg",
  },
];

export function GamesShowcaseSection() {
  return (
    <section className="border-t border-white/5 bg-[#050816] py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D58D]">
          Juegos
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-100 lg:text-3xl">
          El multiverso de tu colección
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-300">
          Trabajamos con los TCG que más juegas y coleccionas. Cada carta tiene
          su lugar en Once Upon a Deck Store.
        </p>

        {/* Grid de “cartas” solo con imagen */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {GAMES.map((game) => (
            <div
              key={game.name}
              className="
                group relative aspect-[3/4]
                overflow-hidden rounded-2xl
                border border-white/10
                bg-[#050816]
                shadow-md shadow-black/40
                transition
                hover:-translate-y-1 hover:border-[#F4D58D]/80 hover:shadow-[#F4D58D]/25
              "
            >
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
