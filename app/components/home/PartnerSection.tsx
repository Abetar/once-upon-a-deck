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
            Haz que tu inventario cuente historias
          </h2>
          <p className="mt-3 text-sm text-gray-300 lg:text-[15px]">
            Si tienes vitrina, tienda física o simplemente un inventario grande
            de cartas, en Once Upon a Deck puedes publicarlas como Partner.
          </p>
        </div>

        {/* Tarjetas / beneficios */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Paso 1 */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-6 text-center shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-[#F4D58D]/20">
            <p className="text-sm font-semibold text-[#F4D58D] uppercase tracking-wide">
              Nos envías tu inventario
            </p>
          </div>

          {/* Paso 2 */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-6 text-center shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-[#F4D58D]/20">
            <p className="text-sm font-semibold text-[#F4D58D] uppercase tracking-wide">
              Nosotros las mostramos
            </p>
          </div>

          {/* Paso 3 */}
          <div className="group rounded-2xl border border-white/10 bg-[#0B1020] p-6 text-center shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-[#F4D58D]/20">
            <p className="text-sm font-semibold text-[#F4D58D] uppercase tracking-wide">
              Te enviamos los pedidos por WhatsApp
            </p>
          </div>
        </div>

        {/* Nota / CTA suave */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[#F4D58D]/25 bg-[#0B1020] px-4 py-4 text-xs text-gray-200 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl">
            <span className="font-semibold text-[#F4D58D]">Importante:</span>{" "}
            Los precios y existencias publicados en la Partner Shop son
            responsabilidad de cada Partner. Once Upon a Deck funge como vitrina
            digital y canal de contacto para tus clientes.
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
