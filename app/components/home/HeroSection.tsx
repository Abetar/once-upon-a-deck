// components/home/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/common/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#050816] to-[#0B1020] py-16 sm:py-20">
      {/* Neblina mágica de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[-10%] h-64 w-64 rounded-full bg-[#7C3AED]/30 blur-3xl animate-mystic-pulse" />
        <div className="absolute -bottom-40 right-[-10%] h-72 w-72 rounded-full bg-[#F4D58D]/20 blur-3xl animate-mystic-pulse" />
      </div>

      {/* "Estrellitas" sutiles en el fondo */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/4 top-10 h-1 w-1 rounded-full bg-[#F4D58D] animate-star-twinkle" />
        <div className="absolute right-16 top-24 h-1 w-1 rounded-full bg-[#F4D58D] animate-star-twinkle" />
        <div className="absolute right-1/3 bottom-10 h-1 w-1 rounded-full bg-[#7C3AED] animate-star-twinkle" />
      </div>

      <Container className="relative flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D58D]">
            Monterrey, Nuevo León
          </p>
          <h1 className="text-4xl font-semibold text-gray-50 sm:text-5xl">
            Once Upon a Deck
          </h1>
          <p className="text-lg text-[#F4D58D]">
            Donde cada carta cuenta una historia ✨
          </p>
          <p className="text-sm text-gray-300 sm:text-base">
            Venta de cartas Pokémon, Yu-Gi-Oh! y Magic: The Gathering. Elige tus
            cartas, arma tu pedido y recíbelo con el cuidado que tu colección
            merece.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/tienda"
              className="rounded-full bg-[#F4D58D] px-6 py-2 text-sm font-semibold text-[#050816] shadow-md shadow-black/40 transition hover:bg-[#C9A656] hover:shadow-mystic"
            >
              Ver cartas en la tienda
            </Link>
            <Link
              href="https://wa.me/5210000000000"
              target="_blank"
              className="rounded-full border border-[#7C3AED] bg-[#050816] px-6 py-2 text-sm font-semibold text-gray-200 shadow-md shadow-black/40 transition hover:bg-[#7C3AED]/20 hover:border-[#F4D58D] hover:shadow-mystic"
            >
              Escribir por WhatsApp
            </Link>
          </div>
        </div>

        <div className="relative mt-6 w-full max-w-xs sm:mt-0 sm:max-w-sm animate-mystic-float">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#7C3AED]/40 via-transparent to-[#F4D58D]/40 blur-2xl animate-mystic-pulse" />
          <div className="relative rounded-3xl border border-white/10 bg-[#050816]/80 p-4 shadow-xl shadow-black/50">
            <div className="flex items-center justify-center">
              <Image
                src="/logo-once-upon-a-deck.png"
                alt="Once Upon a Deck logo"
                width={260}
                height={260}
                className="h-auto w-52 sm:w-60 drop-shadow-[0_0_30px_rgba(244,213,141,0.35)]"
              />
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
              Tu próxima carta favorita ya está escrita en este cuento.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
