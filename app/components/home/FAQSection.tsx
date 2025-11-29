"use client";

import { useState } from "react";
import { Container } from "../../components/common/Container";
import { SectionHeader } from "../../components/common/SectionHeader";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "¿Cómo puedo comprar cartas?",
    answer:
      "Entra a la página de la tienda, agrega las cartas que te interesen al carrito y llena tus datos. Al finalizar, envías tu pedido directo por WhatsApp para coordinar pago y envío.",
  },
  {
    question: "¿Hacen envíos fuera de Monterrey?",
    answer:
      "Sí. Realizamos envíos a todo México. Coordinamos paquetería, costos y tiempos directamente por WhatsApp para que elijas la opción que más te convenga.",
  },
  {
    question: "¿Cómo protegen las cartas durante el envío?",
    answer:
      "Usamos sleeves, top loaders (cuando aplica) y empaque reforzado con cartón y burbuja. Tratamos cada pedido como si fuera para nuestra propia colección.",
  },
  {
    question: "¿Puedo pedir fotos o videos de la carta antes de comprar?",
    answer:
      "Claro. Si quieres confirmar condición, brillo, centering o cualquier detalle, te enviamos fotos y videos por WhatsApp sin compromiso.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Principalmente transferencia bancaria y pagos vía SPEI. El método exacto lo confirmamos contigo al momento de cerrar tu pedido por WhatsApp.",
  },
  {
    question: "¿Puedo recoger mi pedido en persona?",
    answer:
      "Si estás en Monterrey, podemos acordar un punto de entrega seguro. Todo se coordina por WhatsApp según disponibilidad.",
  },
];

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1020] transition-transform transition-shadow hover:-translate-y-0.5 hover:border-[#7C3AED]/70 hover:shadow-mystic"
>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm text-gray-100 sm:text-base"
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="text-xs text-[#F4D58D]">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="border-t border-white/10 px-4 py-3 text-xs text-gray-300 sm:text-sm">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-white/5 bg-[#050816] py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="FAQ · Antes de hacer tu pedido"
          subtitle="Si tienes más dudas, siempre puedes escribirnos directo por WhatsApp. Aquí respondemos lo más común."
          align="left"
        />

        <div className="mt-8 space-y-3">
          {faqs.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
