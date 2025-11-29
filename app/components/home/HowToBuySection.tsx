// components/home/HowToBuySection.tsx
import { Container } from "../../components/common/Container";
import { SectionHeader } from "../../components/common/SectionHeader";

const steps = [
  {
    title: "1. Entra a la tienda",
    description:
      "Explora las cartas disponibles por juego, formato o rareza y agrega tus favoritas al carrito.",
  },
  {
    title: "2. Llena tus datos",
    description:
      "Completa tu información de contacto y envío para que podamos preparar tu pedido.",
  },
  {
    title: "3. Ordena por WhatsApp",
    description:
      "Envía tu pedido con un solo clic, resuelve dudas y coordina pago y envío directamente.",
  },
];

export function HowToBuySection() {
  return (
    <section className="border-b border-white/5 bg-[#050816] py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Tu pedido en tres pasos"
          subtitle="Queremos que comprar cartas sea tan simple como robar tu opening hand."
          align="center"
        />

        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0B1020] p-5 text-center shadow-sm shadow-black/40 transition-transform transition-shadow hover:-translate-y-1 hover:border-[#F4D58D]/70 hover:shadow-mystic"
>
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0B1020] p-5 text-center shadow-sm shadow-black/40"
            >
              <h3 className="text-sm font-semibold text-[#F4D58D]">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
