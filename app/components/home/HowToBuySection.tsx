// components/home/HowToBuySection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const STEPS = [
  {
    id: 1,
    title: "Entra a la tienda",
    image: "/how-to-buy/step-1-enter-store_2.png",
    alt: "Carta: Entra a la tienda",
  },
  {
    id: 2,
    title: "Llena tus datos",
    image: "/how-to-buy/step-2-fill-data_1.png",
    alt: "Carta: Llena tus datos",
  },
  {
    id: 3,
    title: "Ordena por WhatsApp",
    image: "/how-to-buy/step-3-whatsapp_1.png",
    alt: "Carta: Ordena por WhatsApp",
  },
];

export function HowToBuySection() {
  return (
    <section className="border-t border-white/5 bg-[#050816] py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F4D58D]/80">
            Tu pedido
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#F4D58D] lg:text-3xl">
            En tres pasos
          </h2>
        </div>

        {/* Grid de cartas */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="
                rounded-2xl
                bg-[#050816]
                shadow-md shadow-black/60
                transition
                hover:-translate-y-1 hover:shadow-[#F4D58D]/30
                flex
                items-center
                justify-center
                p-2
              "
            >
              {/* Contenedor que define el tamaño de la carta */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  // 👇 Aquí se asegura que la imagen use 100% del espacio del contenedor
                  className="w-full h-full object-contain"
                  sizes="(max-width: 768px) 80vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA opcional */}
        <div className="mt-8 text-center">
          <Link
            href="/once-upon-a-deck-store"
            className="inline-flex items-center rounded-full bg-[#F4D58D] px-6 py-2 text-sm font-semibold text-[#050816] shadow-md shadow-[#F4D58D]/40 transition hover:bg-[#C9A656]"
          >
            Entrar a Once Upon a Deck Store
          </Link>
        </div>
      </div>
    </section>
  );
}
