// components/layout/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../components/common/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050816]/90 backdrop-blur-md">
      <Container className="flex flex-col items-start gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo + marca */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#050816] shadow-mystic group-hover:animate-aura-glow">
            <Image
              src="/logo-once-upon-a-deck.png"
              alt="Once Upon a Deck"
              width={40}
              height={40}
              className="rounded-md"
            />

            {/* halo suave alrededor */}
            <span className="pointer-events-none absolute inset-0 rounded-xl border border-[#F4D58D]/40" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="whitespace-nowrap text-base font-semibold tracking-wide text-[#F4D58D] sm:text-lg">
              Once Upon a Deck
            </span>
            <span className="hidden text-[11px] text-gray-400 sm:block">
              Donde cada carta cuenta una historia ✨
            </span>
          </div>
        </Link>

        {/* Navegación */}
        <nav className="flex w-full flex-wrap items-center gap-4 text-xs text-gray-300 sm:w-auto sm:justify-end sm:text-sm">
          <Link href="/" className="hover:text-[#F4D58D]">
            Inicio
          </Link>
          <Link href="/tienda" className="hover:text-[#F4D58D]">
            Tienda
          </Link>
          <Link
            href="https://www.instagram.com/onceupon_adeck/"
            target="_blank"
            className="hover:text-[#F4D58D]"
          >
            Instagram
          </Link>
        </nav>
      </Container>
    </header>
  );
}
