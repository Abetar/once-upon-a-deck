// // components/home/TrustSection.tsx
// import { Container } from "../../components/common/Container";
// import { SectionHeader } from "../../components/common/SectionHeader";

// components/home/TrustSection.tsx
export function TrustSection() {
  return (
    <section className="bg-[#050816] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D58D]">
          Confianza
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-white">
          Pensado para jugadores que ya crecieron
          <br className="hidden md:block" /> (pero siguen coleccionando)
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300">
          Sabemos lo que significa encontrar esa carta que completa tu deck o tu
          colección. Cartas con historia. Momentos con valor real. Once Upon a
          Deck nació para hacer ese proceso más cómodo, transparente y seguro
          para quienes ya no pueden andar tienda por tienda… pero tampoco han
          dejado de amar este hobby.
        </p>

        {/* Grid de confianza */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
            <h3 className="mb-2 text-sm font-semibold text-[#F4D58D]">
              Selección curada
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Nos enfocamos en cartas que realmente importan: staples del meta,
              piezas de colección y cartas que se disfrutan en mesa.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
            <h3 className="mb-2 text-sm font-semibold text-[#F4D58D]">
              Transparencia
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Hablamos claro sobre condiciones, precios y disponibilidad. Sin
              sorpresas, sin depósitos previos, sin estrés.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
            <h3 className="mb-2 text-sm font-semibold text-[#F4D58D]">
              Atención hecha por jugadores
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              La experiencia está pensada para personas reales con vidas
              reales: compra por WhatsApp, entregas cómodas, envíos seguros y
              comunicación directa en todo momento.
            </p>
          </div>
        </div>

        {/* Testimonial premium */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-[#F4D58D]/40 bg-gradient-to-br from-[#050816] via-[#090b1f] to-[#151a33] p-6 shadow-[0_0_45px_rgba(0,0,0,0.9)] md:p-8">
            {/* Glow sutil */}
            <div className="pointer-events-none absolute -inset-1 rounded-3xl border border-[#F4D58D]/10 opacity-40" />

            {/* Encabezado testimonial */}
            <div className="relative mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4D58D]/10 text-[#F4D58D]">
                {/* Ícono de cita */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 10H6a3 3 0 0 1 3-3V5a5 5 0 0 0-5 5v4h5v-4Z" />
                  <path d="M19 10h-3a3 3 0 0 1 3-3V5a5 5 0 0 0-5 5v4h5v-4Z" />
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4D58D]">
                  Historia de un coleccionista
                </p>
                <p className="text-sm text-gray-200">
                  Cómo se siente comprar en Once Upon a Deck
                </p>
              </div>
            </div>

            {/* Cuerpo del testimonio */}
            <div className="relative space-y-4 text-sm leading-relaxed text-gray-200">
              <p>
                “Soy un coleccionista de 35 años. Trabajo, tengo mil pendientes,
                y ya casi no salgo a buscar cartas como antes… pero sigo
                queriendo completar mis decks y mi colección.
              </p>

              <p>
                Un día descubrí Once Upon a Deck. Entré desde mi celular, elegí
                las cartas que me faltaban, pedí un par de sobres, y listo. Me
                las trajeron hasta la puerta de mi casa sin que yo moviera un
                dedo.
              </p>

              <p>
                Lo que más me sorprendió: todo llegó en perfectas condiciones,
                con sleeves y protección premium. Incluso venía producto
                sellado disponible, así que terminé comprando un par de sobres
                en el momento, sin tener que salir ni perder tiempo.
              </p>

              <p>
                Y la cereza del pastel: pagué contra entrega. Revisé mis cartas,
                confirmé que todo estaba perfecto, y ahí mismo pagué. Sin
                riesgos, sin depósito previo, sin estrés.
              </p>

              <p>
                Desde entonces, coleccionar volvió a sentirse cómodo. Humano.
                Pensado para jugadores reales con vidas reales.”
              </p>
            </div>

            {/* Firma */}
            <div className="relative mt-6 flex flex-col gap-1 border-t border-white/10 pt-4 text-xs text-gray-400">
              <span className="font-semibold text-[#F4D58D]">
                Ulises Gómez
              </span>
              <span>Coleccionista · 35 años</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

