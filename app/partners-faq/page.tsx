// app/partners-faq/page.tsx
import { PartnerFaqSection } from "../components/home/PartnerFaqSection";

export default function PartnersFaqPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D58D]">
            Dudas frecuentes · Partners
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-100 lg:text-4xl">
            Preguntas frecuentes para tiendas y vendedores Partners
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-300 lg:text-[15px]">
            Aquí encontrarás respuestas rápidas sobre cómo funciona Once Upon a
            Deck Store para partners: inventario, publicación de cartas, pedidos
            por WhatsApp y operación general.
          </p>
        </header>

        {/* Reutilizamos la sección que ya tenías */}
        <PartnerFaqSection />
      </div>
    </main>
  );
}
