// components/home/ShippingInfoSection.tsx
import { Container } from "../../components/common/Container";
import { SectionHeader } from "../../components/common/SectionHeader";

export function ShippingInfoSection() {
  return (
    <section className="border-b border-white/5 bg-[#050816] py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Envíos"
          title="Desde Monterrey hasta donde llegue la historia"
          subtitle="Preparamos cada envío con fundas, protección y empaque adecuado para que tus cartas lleguen listas para jugar o exhibir."
          align="left"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3 text-xs text-gray-300">
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
            <h3 className="text-sm font-semibold text-gray-50">
              Cuidado del empaque
            </h3>
            <p className="mt-2">
              Usamos sleeves, top loaders y material de protección para que tus
              cartas lleguen en el estado que esperas.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
            <h3 className="text-sm font-semibold text-gray-50">
              Envíos desde Monterrey
            </h3>
            <p className="mt-2">
              Coordinamos el envío contigo por WhatsApp para elegir la mejor
              opción según tu ciudad y urgencia.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4">
            <h3 className="text-sm font-semibold text-gray-50">
              Comunicación directa
            </h3>
            <p className="mt-2">
              Te mantenemos al tanto del proceso: confirmación de pago, armado
              del paquete y datos de rastreo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
