// components/home/PartnerFaqSection.tsx

export function PartnerFaqSection() {
  const faqs = [
    {
      question: "¿Qué necesito para ser Partner?",
      answer:
        "Solo necesitas tener inventario de cartas TCG (Pokémon, Yu-Gi-Oh!, Magic, etc.), manejar precios claros y contar con un número de WhatsApp donde podamos contactarte para los pedidos.",
    },
    {
      question: "¿Cómo se sube el inventario a la Partner Shop?",
      answer:
        "Nos compartes tu inventario (nombre de la carta, juego, rareza, precio y fotos) y nosotros lo integramos a la plataforma. Más adelante podrás actualizar y agregar cartas de manera más ágil según tus necesidades.",
    },
    {
      question: "¿Quién controla los precios y la disponibilidad?",
      answer:
        "Tú como Partner controlas tus precios, existencias y condiciones de venta. Once Upon a Deck solo funge como vitrina digital y canal de contacto para que lleguen más jugadores y coleccionistas a tus cartas.",
    },
    {
      question: "¿Cómo se realizan los pedidos?",
      answer:
        "Los jugadores agregan cartas al carrito y envían su pedido por WhatsApp. A partir de ahí, tú coordinas el precio final en MXN, métodos de pago, envío o entrega directa según tus políticas.",
    },
    {
      question: "¿La Partner Shop es solo para Monterrey?",
      answer:
        "La base de operación está en Monterrey, N.L., pero puedes acordar envíos a otras ciudades siempre que tú como Partner lo manejes directamente con tus clientes.",
    },
  ];

  return (
    <section className="border-t border-white/5 bg-[#050816] py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D58D]">
            Preguntas frecuentes · Partners
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-100 lg:text-3xl">
            FAQ para tiendas y vendedores Partners
          </h2>
          <p className="mt-3 text-sm text-gray-300 lg:text-[15px]">
            Si estás pensando en publicar tu inventario en Once Upon a Deck,
            estas respuestas te pueden ayudar a entender mejor cómo funciona la Partner Shop.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm text-gray-200 shadow-md shadow-black/40"
            >
              <p className="text-[13px] font-semibold text-[#F4D58D]">
                {item.question}
              </p>
              <p className="mt-1 text-[13px] text-gray-300">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
