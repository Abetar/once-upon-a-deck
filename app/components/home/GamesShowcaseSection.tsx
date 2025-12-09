// app/components/home/GamesShowcaseSection.tsx
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    slug: "lorcana",
    name: "Lorcana",
    image: "/games/lorcana-card.png",
  },
  {
    slug: "pokemon",
    name: "Pokémon",
    image: "/games/pokemon-card.jpg",
  },
  {
    slug: "yugioh",
    name: "Yu-Gi-Oh!",
    image: "/games/yugioh-card.jpg",
  },
  {
    slug: "magic",
    name: "Magic: The Gathering",
    image: "/games/magic-card.jpg",
  },
  {
    slug: "one-piece",
    name: "One Piece",
    image: "/games/onepiece-card.jpg",
  },
];

export function GamesShowcaseSection() {
  return (
    <section className="bg-[#050816] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D58D]">
          Juegos
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white">
          El multiverso de tu colección
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-300">
          Trabajamos con los TCG que más juegas y coleccionas. Cada carta tiene
          su lugar en Once Upon a Deck Store.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/once-upon-a-deck-store?game=${game.slug}`}
              className="group flex justify-center cursor-pointer"
            >
              <div
                className="
      relative aspect-[3/4] w-full max-w-[220px]
      overflow-hidden rounded-3xl 
      border border-white/10
      bg-gradient-to-b from-[#050816] to-[#0B1020]
      shadow-lg shadow-black/50

      /* efectos iniciales */
      transition-all duration-300 ease-out

      /* efectos hover */
      group-hover:-translate-y-3
      group-hover:scale-[1.06]
      group-hover:border-[#F4D58D]/70
      group-hover:shadow-[0_0_25px_rgba(244,213,141,0.35)]
    "
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="
        object-contain p-3 
        transition-all duration-300 
        group-hover:brightness-110 group-hover:contrast-110
      "
                  sizes="(max-width: 768px) 45vw, 220px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
