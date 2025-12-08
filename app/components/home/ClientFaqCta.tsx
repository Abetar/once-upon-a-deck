import Link from "next/link";

export function ClientFaqCta() {
  return (
    <section className="border-t border-white/5 bg-[#050816] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center">
        <p className="text-sm font-medium text-gray-200">
          ¿Tienes dudas como jugador o coleccionista?
        </p>
        <p className="max-w-xl text-xs text-gray-400">
          Preparamos una sección con las preguntas más frecuentes sobre pedidos,
          envíos y estado de las cartas en Once Upon a Deck Store.
        </p>
        <Link
          href="/faqs"
          className="mt-2 inline-flex items-center rounded-full border border-[#F4D58D]/70 px-5 py-2 text-xs font-semibold text-[#F4D58D] hover:border-[#F4D58D] hover:bg-[#F4D58D]/10"
        >
          Ver FAQs para clientes
        </Link>
      </div>
    </section>
  );
}
