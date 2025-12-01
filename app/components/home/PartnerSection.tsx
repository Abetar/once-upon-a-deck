// components/home/PartnerSection.tsx
export function PartnerSection() {
  return (
    <section className="border-t border-white/5 bg-[#050816] py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Encabezado */}
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D58D]">
            Partner Shop · Para tiendas y vendedores
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-100 lg:text-3xl">
            Convierte tu inventario en historias que otros jugadores quieran contar
          </h2>
          <p className="mt-3 text-sm text-gray-300 lg:text-[15px]">
            Si tienes vitrina, tienda física o simplemente un inventario grande de cartas,
            en Once Upon a Deck puedes publicarlas como Partner. Nosotros mostramos tus cartas,
            tú sigues controlando precios, stock y cierres por WhatsApp.
          </p>
        </div>

        {/* Tarjetas / beneficios */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-[#F4D58D]/20">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F4D58D]">
              1 · Publica tu inventario
            </p>
            <p className="text-sm text-gray-200">
              Te ayudamos a subir tus cartas a la Partner Shop: nombre, juego, rareza, precio y
              fotos. Puedes actualizar tu inventario cuando lo necesites.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-[#F4D58D]/20">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F4D58D]">
              2 · Nosotros mostramos tus cartas
            </p>
            <p className="text-sm text-gray-200">
              Tus cartas aparecen en la sección Partner Shop y en futuras campañas de Once Upon a Deck,
              conectando tu inventario con jugadores y coleccionistas de Monterrey y alrededores.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-4 shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-[#F4D58D]/20">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#F4D58D]">
              3 · Recibe pedidos por WhatsApp
            </p>
            <p className="text-sm text-gray-200">
              Cada carrito se envía directo a tu WhatsApp. Tú confirmas disponibilidad, acuerdas
              precio final en MXN, métodos de pago y entrega con el cliente.
            </p>
          </div>
        </div>

        {/* Nota / CTA suave */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#F4D58D]/25 bg-[#0B1020] px-4 py-4 text-xs text-gray-200 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl">
            <span className="font-semibold text-[#F4D58D]">Importante:</span>{" "}
            Los precios y existencias publicados en la Partner Shop son responsabilidad de cada Partner.
            Once Upon a Deck funge como vitrina digital y canal de contacto para tus clientes.
          </p>

          <a
            href="https://wa.me/52XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[#F4D58D] px-4 py-2 text-[11px] font-semibold text-[#050816] shadow-md shadow-[#F4D58D]/40 transition hover:bg-[#C9A656] md:mt-0"
          >
            Quiero ser Partner
          </a>
        </div>
      </div>
    </section>
  );
}
