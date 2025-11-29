// components/home/HighlightStrip.tsx
import { Container } from "../../components/common/Container";

const highlights = [
  "Pokémon · Yu-Gi-Oh! · Magic: The Gathering",
  "Envíos desde Monterrey, N.L.",
  "Cartas competitivas y de colección",
  "Atención personalizada por WhatsApp",
];

export function HighlightStrip() {
  return (
    <section className="border-b border-white/5 bg-[#050816]">
      <Container className="flex flex-wrap items-center justify-center gap-3 py-4 text-[11px] sm:text-xs">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0B1020] px-3 py-1 text-gray-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-[#F4D58D] to-[#7C3AED]" />
            <span>{item}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
