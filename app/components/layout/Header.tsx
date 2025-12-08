"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + nombre */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-black">
            <Image
              src="/logo-once-upon-a-deck.png"
              alt="Once Upon a Deck logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#F4D58D]">
              Once Upon a Deck
            </p>
            <p className="text-[11px] text-gray-400">
              Store de cartas TCG en MTY
            </p>
          </div>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
          <Link href="/" className="hover:text-[#F4D58D]">
            Inicio
          </Link>

          <Link
            href="/once-upon-a-deck-store"
            className="hover:text-[#F4D58D]"
          >
            Once Upon a Deck Store
          </Link>

          {/* Dropdown FAQs */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-[#F4D58D]"
            >
              <span>FAQs</span>
              <span className="text-xs">▾</span>
            </button>

            <div className="pointer-events-none absolute right-0 mt-2 hidden w-52 rounded-xl border border-white/10 bg-[#050816] p-2 text-xs text-gray-200 shadow-lg shadow-black/40 group-hover:pointer-events-auto group-hover:block">
              <Link
                href="/faqs"
                className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-[#F4D58D]"
              >
                FAQs Clientes
              </Link>
              <Link
                href="/partners-faq"
                className="mt-1 block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-[#F4D58D]"
              >
                FAQs Partners
              </Link>
            </div>
          </div>

          <Link
            href="https://www.instagram.com/onceupon_adeck/"
            target="_blank"
            className="hover:text-[#F4D58D]"
          >
            Instagram
          </Link>

          <Link
            href="https://wa.me/52XXXXXXXXXX"
            target="_blank"
            className="rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-[#050816] hover:bg-[#1EB555]"
          >
            WhatsApp
          </Link>
        </nav>

        {/* Botón mobile */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#050816]/80 p-2 text-gray-200 shadow-md shadow-black/40 md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? (
            // X
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburguesa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <nav className="border-t border-white/10 bg-[#050816]/95 px-4 pb-4 pt-2 text-sm text-gray-200 md:hidden">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="block rounded-lg px-2 py-1 hover:bg-white/5 hover:text-[#F4D58D]"
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/once-upon-a-deck-store"
                className="block rounded-lg px-2 py-1 hover:bg-white/5 hover:text-[#F4D58D]"
                onClick={closeMenu}
              >
                Once Upon a Deck Store
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="block rounded-lg px-2 py-1 hover:bg-white/5 hover:text-[#F4D58D]"
                onClick={closeMenu}
              >
                FAQs Clientes
              </Link>
            </li>
            <li>
              <Link
                href="/partners-faq"
                className="block rounded-lg px-2 py-1 hover:bg-white/5 hover:text-[#F4D58D]"
                onClick={closeMenu}
              >
                FAQs Partners
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/onceupon_adeck/"
                target="_blank"
                className="block rounded-lg px-2 py-1 hover:bg-white/5 hover:text-[#F4D58D]"
                onClick={closeMenu}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/52XXXXXXXXXX"
                target="_blank"
                className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-[#050816] hover:bg-[#1EB555]"
                onClick={closeMenu}
              >
                Escribir por WhatsApp
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
