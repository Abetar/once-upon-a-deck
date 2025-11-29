// components/home/TrustSection.tsx
import { Container } from "../../components/common/Container";
import { SectionHeader } from "../../components/common/SectionHeader";

export function TrustSection() {
  return (
    <section className="border-b border-white/5 bg-[#050816] py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Confianza"
          title="Pensado por jugadores y coleccionistas"
          subtitle="Sabemos lo que significa encontrar esa carta que completa tu deck o tu colección. Por eso tratamos cada pedido como si fuera propio."
          align="center"
        />

        <div className="mt-8 grid gap-6 text-xs text-gray-300 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
            <h3 className="text-sm font-semibold text-gray-50">
              Selección curada
            </h3>
            <p className="mt-2">
              Nos enfocamos en cartas que tienen historia: staples del meta,
              piezas de colección y cartas que se disfrutan en mesa.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
            <h3 className="text-sm font-semibold text-gray-50">
              Transparencia
            </h3>
            <p className="mt-2">
              Hablamos claro sobre estado, edición y disponibilidad para que
              sepas exactamente qué estás comprando.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
            <h3 className="text-sm font-semibold text-gray-50">
              Trato cercano
            </h3>
            <p className="mt-2">
              No eres solo un número de pedido. Si tienes dudas, armamos juntos
              el pedido por WhatsApp.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
