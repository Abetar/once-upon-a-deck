// app/faqs/page.tsx
export default function ClientFaqPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D58D]">
            Dudas frecuentes · Clientes
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-100 lg:text-4xl">
            Preguntas frecuentes para jugadores y coleccionistas
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-300 lg:text-[15px]">
            Aquí resolvemos las dudas más comunes sobre cómo funciona Once Upon
            a Deck Store: pedidos, envíos, estado de las cartas y pagos.
          </p>
        </header>

        <div className="space-y-6 text-sm lg:text-[15px]">
          {/* FAQ 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 lg:p-5">
            <h2 className="text-sm font-semibold text-[#F4D58D]">
              ¿Cómo hago un pedido desde Once Upon a Deck Store?
            </h2>
            <p className="mt-2 text-gray-300">
              Eliges las cartas que te interesan, las agregas al carrito y, al
              final, envías tu pedido por WhatsApp. Ahí podrás confirmar
              disponibilidad, precio final en MXN y coordinar el envío directo
              con la tienda o vendedor partner.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 lg:p-5">
            <h2 className="text-sm font-semibold text-[#F4D58D]">
              ¿Los precios que veo en la Store son finales?
            </h2>
            <p className="mt-2 text-gray-300">
              Los precios mostrados son una referencia según lo que publica cada
              partner. El precio final, así como promociones o ajustes por
              condiciones de la carta, se confirman siempre por WhatsApp antes
              de cerrar el trato.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 lg:p-5">
            <h2 className="text-sm font-semibold text-[#F4D58D]">
              ¿Desde dónde se envían las cartas?
            </h2>
            <p className="mt-2 text-gray-300">
              La mayoría de nuestros partners operan desde Monterrey, Nuevo
              León. Algunos pueden ofrecer entregas locales y otros envíos a
              otras ciudades. Todo se coordina caso por caso directamente en el
              chat de WhatsApp.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 lg:p-5">
            <h2 className="text-sm font-semibold text-[#F4D58D]">
              ¿Cómo sé en qué estado llega la carta?
            </h2>
            <p className="mt-2 text-gray-300">
              Cada partner indica condiciones aproximadas (por ejemplo:
              &quot;casi nueva&quot;, &quot;ligero desgaste&quot;, &quot;para
              juego&quot;). Si necesitas más fotos o detalles, puedes
              solicitarlos antes de confirmar tu compra en el chat de WhatsApp.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 lg:p-5">
            <h2 className="text-sm font-semibold text-[#F4D58D]">
              ¿Aceptan devoluciones o cambios?
            </h2>
            <p className="mt-2 text-gray-300">
              Las condiciones de cambios o devoluciones dependen de cada tienda
              o vendedor partner. Te recomendamos confirmar estos detalles
              directamente con ellos antes de realizar el pago.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-4 lg:p-5">
            <h2 className="text-sm font-semibold text-[#F4D58D]">
              ¿Puedo apartar cartas o hacer pedidos especiales?
            </h2>
            <p className="mt-2 text-gray-300">
              Algunos partners pueden manejar apartados o búsquedas especiales
              de cartas difíciles de conseguir. Pregunta directamente por
              WhatsApp si el vendedor que te interesa ofrece este tipo de
              servicio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
