// components/home/GamesShowcaseSection.tsx
import { Container } from "../../components/common/Container";
import { SectionHeader } from "../../components/common/SectionHeader";

const games = [
  {
    name: "Pokémon TCG",
    description:
      "Cartas para armar decks competitivos, full arts de colección y productos especiales.",
    tags: ["Coleccionistas", "Competitivo", "Sellado"],
  },
  {
    name: "Yu-Gi-Oh!",
    description:
      "Staples, handtraps y cartas clave para tu deck, además de cartas raras para vitrina.",
    tags: ["Meta", "Staples", "Raras"],
  },
  {
    name: "Magic: The Gathering",
    description:
      "Cartas para Commander, Modern y otros formatos, con foco en piezas que cuentan historias.",
    tags: ["Commander", "Modern", "Foils"],
  },
];

export function GamesShowcaseSection() {
  return (
    <section className="border-b border-white/5 bg-[#050816] py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Juegos"
          title="El multiverso de tu colección"
          subtitle="Nos enfocamos en cartas que realmente quieres jugar, coleccionar o atesorar."
          align="left"
        />

        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-sm shadow-black/40 transition-transform transition-shadow hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-mystic">
          {games.map((game) => (
            <div
              key={game.name}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-sm shadow-black/40"
            >
              <h3 className="text-lg font-semibold text-gray-50">
                {game.name}
              </h3>
              <p className="text-xs text-gray-400">{game.description}</p>
              <div className="mt-1 flex flex-wrap gap-2 mb-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#7C3AED]/15 px-2 py-0.5 text-[10px] font-medium text-[#F4D58D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
