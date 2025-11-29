// components/home/FinalCTASection.tsx
import Link from "next/link";
import { Container } from "../../components/common/Container";

export function FinalCTASection() {
  return (
    <section className="border-b border-white/5 bg-gradient-to-r from-[#0B1020] via-[#1E1035] to-[#0B1020] py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-50 sm:text-3xl">
          ¿Listo para que tu deck cuente una nueva historia?
        </h2>
        <p className="max-w-xl text-sm text-gray-300">
          Explora la tienda, agrega tus cartas favoritas al carrito y manda tu
          pedido por WhatsApp. Nosotros nos encargamos del resto.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tienda"
            className="rounded-full bg-[#F4D58D] px-6 py-2 text-sm font-semibold text-[#050816] shadow-md shadow-black/40 transition hover:bg-[#C9A656]"
          >
            Ir a la tienda
          </Link>
          <Link
            href="https://wa.me/5210000000000"
            target="_blank"
            className="rounded-full border border-[#7C3AED] bg-[#050816] px-6 py-2 text-sm font-semibold text-gray-200 shadow-md shadow-black/40 transition hover:bg-[#7C3AED]/20"
          >
            Mandar mensaje por WhatsApp
          </Link>
        </div>
      </Container>
    </section>
  );
}
 